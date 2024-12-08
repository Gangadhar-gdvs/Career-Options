import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Tabs.css";

const Tabs = ({ selectedCategory,selectedTab, setSelectedTab, setSelectedCategory }) => {
  const tabs = ["After 10th", "After 12th", "After Diploma", "After Degree"];
  const categories = ["Central Wise", "State Wise", "Private Sector"]; // Dropdown options

  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Set the selected category
    setSelectedTab("After 10th"); // Set default sub-tab
    setShowDropdown(false); // Close the dropdown
  };

  return (
    <>
      <div className="Das_tabs">
        {/* Career Paths tab */}
        <div
          className={`Das_tab ${selectedTab === "Career Path" ? "active" : ""}`}
          onClick={() => setSelectedTab("Career Path")}
        >
          <Link to="/career" className="Das_link">
            Career Paths
          </Link>
        </div>

        {/* Jobs Path tab with dropdown */}
        <div
          className={`Das_tab ${selectedTab === "Jobs Path" ? "active" : ""}`}
          onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
        >
          <Link to="/jobs" className="Das_link">
            Jobs Paths
          </Link>
          {showDropdown && (
            <div className="Das_tab_drop">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`Das_link_drop btn_tab ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sub-tabs for the selected category */}
      <div className="Das_Sub_tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`Das_tab-button btn_tab ${selectedTab === tab ? "active" : ""}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default Tabs;
