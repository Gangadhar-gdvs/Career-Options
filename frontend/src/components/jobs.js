import React, { useState } from 'react';
import Navbar from './Dash_Navbar';
import Tabs from './Tabs';
import CareerDetails from './JobDetails.js';
import SearchBar from './Searchbar';
import './jobs.css';
import Footer from './Footer.js'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Central Wise");
const [selectedTab, setSelectedTab] = useState("After 10th");
  const [searchQuery, setSearchQuery] = useState("");
 // To manage selected course
//    const [selectedSpecialization, setSelectedSpecialization] = useState(null); // To manage selected specialization

  // Define course data with their specializations
  const careerData = {
    "Central Wise": {
      "After 10th": [
        { name: "Technician", domain: "Engineering & Technical", fields: ["Civil, ", "Mechanical, ", "Electrical, ", "Automobile, ", "Electronics"] },
        { name: "Factory Worker", domain: "Manufacturing & Production", fields: ["Assembly, ", "Production Line, ", "Quality Control, ", "Packaging"] },
        { name: "Multi-Tasking Staff (MTS)", domain: "Support Staff", fields: ["Office Support, ", "Document Handling, ", "Logistics Support"] },
        { name: "Tradesman", domain: "Technical", fields: ["Carpentry, ", "Welding, ", "Plumbing, ", "Electrical Repairs"] },
        { name: "Police Constable", domain: "Law Enforcement", fields: ["Crime Investigation, ", "Patrolling, ", "Public Safety"] },
        { name: "Forest Guard", domain: "Environmental Protection", fields: ["Patrolling, ", "Wildlife Conservation, ", "Forest Management"] },
        { name: "Lab Assistant", domain: "Science & Research", fields: ["Laboratory Work, ", "Testing, ", "Sample Collection"] },
        { name: "Storekeeper", domain: "Inventory & Logistics", fields: ["Inventory Management, ", "Stock Control, ", "Delivery Coordination"] },
      ],
      "After 12th": [
        { name: "Data Entry Operator", domain: "IT & Administration", fields: ["Typing, ", "Data Management, ", "Database Updates"] },
        { name: "Clerk", domain: "Office Administration", fields: ["Filing, ", "Record Keeping, ", "Scheduling"] },
        { name: "Postal Assistant", domain: "Communication Services", fields: ["Mail Handling, ", "Customer Service, ", "Sorting"] },
        { name: "Stenographer", domain: "Secretarial Work", fields: ["Typing, ", "Shorthand, ", "Scheduling"] },
        { name: "Junior Statistical Assistant", domain: "Statistics", fields: ["Data Collection, ", "Survey Management"] },
        { name: "Border Security Force (BSF) Soldier", domain: "Defence Services", fields: ["Border Patrolling, ", "National Security"] },
        { name: "Railway Ticket Examiner", domain: "Transportation", fields: ["Passenger Assistance, ", "Ticket Checking"] },
        { name: "Technical Assistant", domain: "Engineering & Technology", fields: ["Technical Support, ", "Machine Maintenance"] },
      ],
      "After Diploma": [
        { name: "Junior Engineer", domain: "Engineering", fields: ["Construction, ", "Structural Design, ", "Urban Planning"] },
        { name: "Pharmacist", domain: "Healthcare", fields: ["Pharmacy, ", "Hospital Pharmacy, ", "Retail Pharmacy"] },
        { name: "Lab Assistant", domain: "Science & Research", fields: ["Testing, ", "Equipment Handling, ", "Lab Maintenance"] },
        { name: "Draftsman", domain: "Engineering & Design", fields: ["Technical Drawing, ", "Blueprint Creation"] },
        { name: "Sub-Inspector", domain: "Police Services", fields: ["Crime Investigation, ", "Team Supervision"] },
        { name: "Health Inspector", domain: "Public Health", fields: ["Sanitation Inspection, ", "Health Awareness Campaigns"] },
        { name: "Field Supervisor", domain: "Construction", fields: ["Site Supervision, ", "Workforce Coordination"] },
        { name: "Assistant Programmer", domain: "IT & Software", fields: ["Programming, ", "Software Testing"] },
      ],
      "After Degree": [
        { name: "Civil Engineer", domain: "Engineering", fields: ["Infrastructure Development, ", "Structural Engineering, ", "Urban Planning"] },
        { name: "Accountant", domain: "Finance", fields: ["Taxation, ", "Auditing, ", "Corporate Finance, ", "Risk Management"] },
        { name: "Administrative Officer", domain: "Management", fields: ["Policy Implementation, ", "Staff Supervision, ", "Office Management"] },
        { name: "Indian Administrative Services (IAS)", domain: "Civil Services", fields: ["Policy Making, ", "Administration, ", "Public Services"] },
        { name: "Data Scientist", domain: "Information Technology", fields: ["Data Analysis, ", "Machine Learning"] },
        { name: "Agricultural Scientist", domain: "Agriculture", fields: ["Crop Research, ", "Farmer Assistance"] },
        { name: "Defence Officer", domain: "Military", fields: ["Strategic Planning, ", "National Defence"] },
        { name: "Public Relations Officer", domain: "Media & Communication", fields: ["Media Interaction, ", "Event Management"] },
        { name: "Legal Advisor", domain: "Law", fields: ["Legal Guidance, ", "Document Review"] },
        { name: "Chief Financial Officer", domain: "Finance", fields: ["Corporate Strategy, ", "Financial Planning"] },
      ],
    },
    "State Wise": {
      "After 10th": [
        { name: "Peon", domain: "Support Staff", fields: ["Document Handling, ", "Office Support"] },
        { name: "Driver", domain: "Logistics", fields: ["Transport Services, ", "Maintenance"] },
        { name: "Gardener", domain: "Horticulture", fields: ["Plant Care, ", "Landscaping"] },
        { name: "Village Assistant", domain: "Rural Administration", fields: ["Document Assistance, ", "Basic Administrative Support"] },
        { name: "Forest Worker", domain: "Environmental Protection", fields: ["Tree Planting, ", "Forest Management"] },
        { name: "Construction Helper", domain: "Construction", fields: ["Material Handling, ", "Basic Construction Tasks"] },
        { name: "Cultural Assistant", domain: "Culture & Heritage", fields: ["Event Organization, ", "Cultural Preservation"] },
      ],
      "After 12th": [
        { name: "Forest Guard", domain: "Environmental Protection", fields: ["Patrolling, ", "Wildlife Conservation, ", "Forest Management"] },
        { name: "Assistant Clerk", domain: "Office Administration", fields: ["Clerical Work, ", "File Management"] },
        { name: "Police Constable", domain: "Law Enforcement", fields: ["Patrolling, ", "Crime Investigation"] },
        { name: "Revenue Assistant", domain: "Revenue Services", fields: ["Tax Collection, ", "Data Entry"] },
        { name: "Health Worker", domain: "Public Health", fields: ["First Aid, ", "Health Education"] },
        { name: "Social Worker", domain: "Social Services", fields: ["Community Assistance, ", "Welfare Programs"] },
        { name: "Fisheries Assistant", domain: "Fisheries", fields: ["Fishery Management, ", "Aquaculture Support"] },
        { name: "Nursing Assistant", domain: "Healthcare", fields: ["Patient Care, ", "Basic Medical Assistance"] },
        { name: "Railway Clerk", domain: "Transportation", fields: ["Ticketing, ", "Customer Assistance"] },
      ],
      "After Diploma": [
        { name: "Laboratory Technician", domain: "Healthcare", fields: ["Laboratory Management, ", "Sample Collection, ", "Medical Testing"] },
        { name: "Draftsman", domain: "Engineering", fields: ["Drawing, ", "Blueprint Preparation"] },
        { name: "Electrician", domain: "Electrical", fields: ["Circuit Installation, ", "Maintenance", "Repairs"] },
        { name: "Plumber", domain: "Construction", fields: ["Pipe Installation, ", "Maintenance, ", "Repairs"] },
        { name: "Architect", domain: "Engineering & Design", fields: ["Design Planning, ", "Blueprint Creation, ", "Structural Design"] },
        { name: "Pharmacy Technician", domain: "Healthcare", fields: ["Prescription Handling, ", "Medicine Dispensing"] },
        { name: "Nursing Assistant", domain: "Healthcare", fields: ["Patient Care, ", "Basic Medical Assistance"] },
      ],
      "After Degree": [
        { name: "Teacher", domain: "Education", fields: ["Classroom Teaching, ", "Curriculum Development"] },
        { name: "Junior Scientist", domain: "Science & Research", fields: ["Research, ", "Data Analysis, ", "Experimentation"] },
        { name: "Social Worker", domain: "Social Services", fields: ["Community Welfare, ", "Program Management"] },
        { name: "Public Health Officer", domain: "Healthcare", fields: ["Health Education, ", "Health Policy Implementation"] },
        { name: "Engineer", domain: "Engineering", fields: ["Project Management, ", "Design, ", "Construction"] },
        { name: "Healthcare Manager", domain: "Healthcare", fields: ["Hospital Management, ", "Staff Supervision, ", "Healthcare Operations"] },
        { name: "Environmental Scientist", domain: "Environmental Protection", fields: ["Environmental Impact Assessment, ", "Conservation"] },
      ],
    },
    "Private Sector": {
      "After 10th": [
        { name: "Retail Associate", domain: "Retail & Sales", fields: ["Customer Service", "Sales", "Inventory Management", "Store Operations"] },
        { name: "Helper", domain: "Support Staff", fields: ["Assisting Tasks", "Inventory Assistance"] },
        { name: "Delivery Driver", domain: "Logistics", fields: ["Package Delivery", "Route Planning"] },
        { name: "Waiter/Waitress", domain: "Hospitality", fields: ["Customer Service", "Order Taking", "Serving"] },
        { name: "Security Guard", domain: "Security Services", fields: ["Patrolling", "Monitoring"] },
        { name: "Cashier", domain: "Retail", fields: ["Payment Processing", "Customer Assistance"] },
      ],
      "After 12th": [
        { name: "Sales Executive", domain: "Sales & Marketing", fields: ["Client Management, ", "Market Research, ", "Product Sales"] },
        { name: "Customer Support", domain: "Support", fields: ["Helpdesk Services, ", "Customer Query Handling"] },
        { name: "Administrative Assistant", domain: "Office Support", fields: ["Scheduling, ", "Record Keeping"] },
        { name: "Digital Marketing Executive", domain: "Marketing & Advertising", fields: ["Social Media Management, ", "Content Marketing"] },
        { name: "Junior Web Developer", domain: "Information Technology", fields: ["Frontend Development, ", "Website Maintenance"] },
        { name: "Insurance Agent", domain: "Insurance", fields: ["Sales, ", "Policy Management, ", "Customer Service"] },
      ],
      "After Diploma": [
        { name: "Graphic Designer", domain: "Design", fields: ["Visual Content Creation, ", "UI/UX Design, ", "Marketing Material Design"] },
        { name: "Technician", domain: "Technical Support", fields: ["Maintenance, ", "System Troubleshooting"] },
        { name: "Data Analyst", domain: "IT & Software", fields: ["Data Analysis, ", "Reporting"] },
        { name: "SEO Specialist", domain: "Digital Marketing", fields: ["Search Engine Optimization, ", "Content Strategy"] },
        { name: "Software Tester", domain: "Software Development", fields: ["Test Case Development, ", "Software Testing"] },
        { name: "Mechanical Engineer", domain: "Engineering", fields: ["Design, ", "Testing, ", "Product Development"] },
      ],
      "After Degree": [
        { name: "Software Developer", domain: "Information Technology", fields: ["Coding, ", "Testing, ", "Application Development, ", "Database Management"] },
        { name: "Marketing Specialist", domain: "Marketing & Advertising", fields: ["Campaign Planning, ", "Brand Strategy, ", "Digital Marketing, ", "SEO"] },
        { name: "Business Analyst", domain: "Business", fields: ["Process Improvement, ", "Strategy Development"] },
        { name: "Project Manager", domain: "Management", fields: ["Team Coordination, ", "Project Planning, ", "Execution"] },
        { name: "HR Manager", domain: "Human Resources", fields: ["Recruitment, ", "Employee Relations, ", "Training"] },
        { name: "Product Manager", domain: "Product Management", fields: ["Product Design, ", "Market Research, ", "Customer Feedback"] },
        { name: "Financial Analyst", domain: "Finance", fields: ["Financial Planning, ", "Budgeting, ", "Forecasting"] },
        { name: "Content Writer", domain: "Content Creation", fields: ["Article Writing, ", "Blogging, ", "SEO Content"] },
      ],
    },
  };
  
  

  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  //   setSelectedTab(Object.keys(careerData[category])[0]); // Set the first tab by default
  // };

  // const handleTabSelect = (tab) => {
  //   setSelectedTab(tab);
  // };

  return (
    <>
      <Navbar />
      <div className="Jobs_Container">
        <Tabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setSelectedCategory={setSelectedCategory}
        />
          <div className='career_cards'>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CareerDetails
          selectedTab={selectedTab}
          careerData={careerData[selectedCategory]}
          searchQuery={searchQuery}
        />
         <Footer />
         </div>
      </div>
     
    </>
  );
};

export default App;
