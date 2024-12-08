import React from 'react';
import './CareerDetails.css'
const CareerDetails = ({ selectedTab, careerData, searchQuery, handleCourseSelect, handleSpecializationSelect, selectedCourse, selectedSpecialization }) => {
  // Filter career data based on the selected tab
  const filteredCareerData = careerData[selectedTab] || [];

  // Filter courses based on search query
  const searchFilteredCareerData = filteredCareerData.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="career-details">
      {/* <h2>Career Options</h2> */}
      <div className="course-list">
        {searchFilteredCareerData.map((course, index) => (
          <div key={index} className="course-item" onClick={() => handleCourseSelect(course)}>
            <h3>{course.name}</h3>
            <p><strong style={{color:' #050b58'}}>Duration:</strong>{course.duration}</p>
            <p><strong style={{color:' #050b58'}}>Description:</strong>{course.description}</p>
          </div>
        ))}
      </div>

      {/* Show specializations when a course is selected */}
      {selectedCourse && !selectedSpecialization && (
        <div className="specialization-list">
        <h3 className="specialization-title">
          Select Specialization for {selectedCourse.name}
        </h3>
        <div className="specialization-items">
          {selectedCourse.specializations.map((specialization, index) => (
            <div
              key={index}
              className="specialization-item"
              onClick={() => handleSpecializationSelect(specialization)}
            >
              <p>{specialization}</p>
            </div>
          ))}
        </div>
      </div>
      
      )}

      {/* Show specialization details if selected */}
      {selectedSpecialization && (
        <div className="specialization-details">
        <h3 className="details-title">Details for {selectedSpecialization}</h3>
        <p className="details-description">
          Information and description about {selectedSpecialization} specialization.
        </p>
        {/* Add further details about the specialization here */}
      </div>
      
      )}
    </div>
  );
};

export default CareerDetails;
