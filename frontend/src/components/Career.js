import React, { useState } from 'react';
import Navbar from './Dash_Navbar';
import Tabs from './Tabs';
import CareerDetails from './CareerDetails';
import SearchBar from './Searchbar';
import './Career.css';
import Footer from './Footer'
const App = () => {
  const [selectedTab, setSelectedTab] = useState('After 10th');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null); // To manage selected course
  const [selectedSpecialization, setSelectedSpecialization] = useState(null); // To manage selected specialization

  // Define course data with their specializations
  const careerData = {
    "After 10th": [
    {
      name: "Engineering Diploma",
      duration: "3 years",
      description: "A foundational engineering program that prepares students for technical roles in fields like Civil, Mechanical, Electrical, etc.",
      specializations: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Electronics and Communication Engineering", "Computer Engineering"],
      nextSteps: ["Bachelor of Engineering (B.E.)", "Bachelor of Technology (B.Tech)"]
    },
    {
      name: "Intermediate (10+2) - Science Stream (PCM/PCB)",
      duration: "2 years",
      description: "Prepares students for science-related careers with options to specialize in subjects like Physics, Chemistry, and Math (PCM) or Physics, Chemistry, and Biology (PCB).",
      specializations: ["Physics", "Chemistry", "Mathematics", "Biology", "Environmental Science"],
      nextSteps: ["Engineering Entrance Exams", "Medical Entrance Exams", "Bachelor of Science (B.Sc.)"]
    },
    {
      name: "Intermediate (10+2) - Commerce Stream",
      duration: "2 years",
      description: "Offers foundational knowledge in commerce subjects like Accountancy, Economics, and Business Studies, suitable for careers in finance, business, and accounting.",
      specializations: ["Accountancy", "Business Studies", "Economics", "Marketing", "Finance"],
      nextSteps: ["Bachelor of Commerce (B.Com)", "Chartered Accountancy (CA)", "Company Secretary (CS)"]
    },
    {
      name: "Intermediate (10+2) - Arts Stream",
      duration: "2 years",
      description: "Provides a broad education in humanities subjects such as History, Geography, Political Science, and Psychology.",
      specializations: ["History", "Political Science", "Geography", "Psychology", "Sociology"],
      nextSteps: ["Bachelor of Arts (B.A.)", "Bachelor of Social Work (BSW)", "Law (LLB)"]
    },
    {
      name: "ITI (Industrial Training Institute) Courses",
      duration: "1-2 years",
      description: "Technical training in trades like electrician, fitter, welder, providing practical and job-oriented skills.",
      specializations: ["Electrician", "Fitter", "Welder", "Mechanic", "Carpentry", "Plumbing", "Tool and Die Making"],
      nextSteps: ["Advanced Diploma Programs", "Lateral Entry into Polytechnic Diplomas"]
    }
  ],
  "After 12th": [
    {
      name: "Bachelor of Science (B.Sc.)",
      duration: "3 years",
      description: "An undergraduate degree in science subjects like Physics, Chemistry, Biology, and Mathematics.",
      specializations: ["Physics", "Chemistry", "Mathematics", "Biology", "Environmental Science", "Zoology", "Botany", "Geology"],
      nextSteps: ["Master of Science (M.Sc.)", "Ph.D. in Science"]
    },
    {
      name: "Bachelor of Commerce (B.Com)",
      duration: "3 years",
      description: "An undergraduate degree focused on commerce and business principles, covering subjects like accounting, finance, and business studies.",
      specializations: ["General Commerce", "Accounting", "Finance", "Economics", "Taxation", "Business Law", "Banking and Insurance"],
      nextSteps: ["Master of Commerce (M.Com)", "Chartered Accountancy (CA)", "Company Secretary (CS)"]
    },
    {
      name: "Bachelor of Arts (B.A.)",
      duration: "3 years",
      description: "A broad undergraduate degree in the arts and humanities, covering subjects like History, Psychology, Sociology, and Political Science.",
      specializations: ["History", "Political Science", "Sociology", "Psychology", "Economics", "Philosophy", "Geography", "English Literature"],
      nextSteps: ["Master of Arts (M.A.)", "Ph.D. in Arts", "Law (LLB)"]
    },
    {
      name: "Bachelor of Technology (B.Tech)",
      duration: "4 years",
      description: "An undergraduate engineering degree with various specializations such as Computer Science, Mechanical, Civil, and Electrical Engineering.",
      specializations: ["Computer Science Engineering", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Electronics and Communication Engineering", "Information Technology", "Aerospace Engineering", "Biotechnology"],
      nextSteps: ["Master of Technology (M.Tech)", "Ph.D. in Engineering"]
    },
    {
      name: "Bachelor of Business Administration (BBA)",
      duration: "3 years",
      description: "An undergraduate program focused on business management, preparing students for managerial roles in various sectors.",
      specializations: ["General Management", "Human Resources", "Marketing", "Finance", "International Business", "Entrepreneurship", "Operations Management", "Hospitality Management"],
      nextSteps: ["Master of Business Administration (MBA)", "Ph.D. in Management"]
    },
    {
      name: "Bachelor of Design (B.Des)",
      duration: "4 years",
      description: "Undergraduate program in design fields such as fashion, graphic, and product design.",
      specializations: ["Fashion Design", "Graphic Design", "Product Design", "Interior Design", "User Experience (UX) Design", "Industrial Design", "Communication Design"],
      nextSteps: ["Master of Design (M.Des)", "Specializations in Design"]
    },
    {
      name: "Bachelor of Fine Arts (BFA)",
      duration: "3-4 years",
      description: "An undergraduate program for creative fields like painting, sculpture, and digital arts.",
      specializations: ["Painting", "Sculpture", "Photography", "Animation", "Graphic Design", "Digital Arts", "Illustration", "Ceramics"],
      nextSteps: ["Master of Fine Arts (MFA)", "Specializations in Arts"]
    }
  ],
  "After Degree": [
    {
      name: "Master of Science (M.Sc.)",
      duration: "2 years",
      description: "A postgraduate degree in science subjects, allowing specialization after completing a B.Sc.",
      specializations: ["Physics", "Chemistry", "Mathematics", "Biology", "Environmental Science", "Zoology", "Botany", "Geology", "Microbiology", "Biotechnology", "Forensic Science", "Astrophysics", "Agricultural Science"],
      nextSteps: ["Ph.D. in Science", "Research Positions"]
    },
    {
      name: "Master of Commerce (M.Com)",
      duration: "2 years",
      description: "A postgraduate degree in commerce, suitable for advanced studies in accounting, finance, and economics.",
      specializations: ["Accounting", "Finance", "Economics", "Taxation", "International Business", "Banking and Finance", "Human Resource Management", "Marketing", "Corporate Governance", "Financial Management"],
      nextSteps: ["Ph.D. in Commerce", "Professional Certifications (CA, CS, CFA)"]
    },
    {
      name: "Master of Arts (M.A.)",
      duration: "2 years",
      description: "A postgraduate degree in arts and humanities, providing advanced knowledge and research opportunities in fields like History, Sociology, and English.",
      specializations: ["English Literature", "History", "Sociology", "Political Science", "Psychology", "Economics", "Philosophy", "Linguistics", "Anthropology", "Public Administration", "Women Studies"],
      nextSteps: ["Ph.D. in Arts", "Academic Positions"]
    },
    {
      name: "Master of Business Administration (MBA)",
      duration: "2 years",
      description: "A professional degree in business administration, preparing students for managerial roles in various industries.",
      specializations: ["General Management", "Human Resources", "Marketing", "Finance", "Operations Management", "International Business", "Supply Chain Management", "Entrepreneurship", "Healthcare Management", "Retail Management", "Information Technology Management"],
      nextSteps: ["Ph.D. in Management", "Executive MBA Programs"]
    },
    {
      name: "Master of Technology (M.Tech)",
      duration: "2 years",
      description: "A postgraduate degree in engineering and technology, allowing for specialization after completing a B.Tech.",
      specializations: ["Computer Science and Engineering", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Electronics and Communication Engineering", "Information Technology", "Aerospace Engineering", "Biotechnology", "Chemical Engineering", "Structural Engineering", "Software Engineering"],
      nextSteps: ["Ph.D. in Engineering", "Research Positions"]
    },
    {
      name: "Doctor of Philosophy (Ph.D.)",
      duration: "3-6 years",
      description: "A doctoral program focused on advanced research in a specific field, available in various domains such as science, arts, and engineering.",
      specializations: ["Science", "Engineering", "Arts", "Commerce", "Management", "Education", "Medical Sciences", "Social Sciences", "Humanities", "Law", "Agriculture", "Technology", "Psychology"],
      nextSteps: ["Postdoctoral Research", "Academic and Research Positions"]
    },
    {
      name: "Doctor of Medicine (MD)",
      duration: "3 years",
      description: "A doctoral program for those with an MBBS degree, allowing specialization in medical fields like cardiology, neurology, and pediatrics.",
      specializations: ["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology", "Psychiatry", "Anesthesia", "Radiology", "Surgery", "Obstetrics and Gynecology", "Pathology", "Emergency Medicine"],
      nextSteps: ["Fellowship Programs", "Specialized Medical Practice"]
    }
  ],
  "After Diploma": [
    {
      name: "Lateral Entry into Engineering Degree (B.Tech/B.E.)",
      duration: "3 years",
      description: "A direct entry into the second year of an engineering degree (B.Tech/B.E.) for diploma holders in engineering, bypassing the first year.",
      specializations: ["Computer Science Engineering", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Electronics and Communication Engineering", "Chemical Engineering", "Automobile Engineering", "Aerospace Engineering", "Biotechnology"],
      nextSteps: ["M.Tech (Master of Technology)", "Research and Development Roles", "Engineering Management"]
    },
    {
      name: "Bachelor of Hotel Management (BHM)",
      duration: "3 years",
      description: "A degree in hospitality management for diploma holders in hotel management, focusing on advanced management and operational roles.",
      specializations: ["Hotel Operations", "Hospitality Marketing", "Food and Beverage Management", "Event Management", "Hospitality Law", "Tourism Management"],
      nextSteps: ["Master of Hotel Management", "Hospitality Industry Leadership Roles"]
    },
    {
      name: "Bachelor of Design (B.Des.)",
      duration: "3-4 years",
      description: "For those with a diploma in fashion, graphic design, or fine arts, this program delves deeper into design theory and practice.",
      specializations: ["Fashion Design", "Graphic Design", "Product Design", "Interior Design", "User Experience (UX) Design", "Industrial Design", "Animation and Multimedia Design"],
      nextSteps: ["Master of Design (M.Des.)", "Specialization in User Experience (UX) or Product Design"]
    },
    {
      name: "Bachelor of Business Administration (BBA)",
      duration: "3 years",
      description: "A management degree ideal for diploma holders in fields like hotel management, fashion, or any vocational studies seeking to enter business management.",
      specializations: ["General Management", "Marketing", "Finance", "Human Resource Management", "Operations Management", "International Business", "Entrepreneurship"],
      nextSteps: ["Master of Business Administration (MBA)", "Business Consultant Roles"]
    },
    {
      name: "Lateral Entry into Polytechnic (Diploma to Degree)",
      duration: "3 years",
      description: "For diploma holders in technical fields like Civil, Mechanical, or Electrical Engineering, this program allows direct entry into a degree course, skipping the first year.",
      specializations: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Electronics Engineering", "Computer Science Engineering", "Biotechnology", "Automobile Engineering"],
      nextSteps: ["M.Tech (Master of Technology)", "Technical and Managerial Roles in Engineering"]
    },
    {
      name: "Bachelor of Pharmacy (B.Pharm)",
      duration: "3 years",
      description: "After completing a diploma in pharmacy (D.Pharm), students can pursue a B.Pharm degree to gain advanced pharmaceutical knowledge.",
      specializations: ["Pharmaceutical Chemistry", "Pharmacology", "Pharmaceutical Technology", "Clinical Pharmacy", "Pharmaceutical Management", "Cosmetic Science"],
      nextSteps: ["Master of Pharmacy (M.Pharm)", "Pharmacist Roles", "Pharmaceutical Research"]
    },
    {
      name: "Bachelor of Veterinary Science (B.V.Sc)",
      duration: "5.5 years",
      description: "A program for those holding a diploma in veterinary science to gain advanced knowledge in animal care, surgery, and medicine.",
      specializations: ["Veterinary Surgery", "Veterinary Medicine", "Animal Reproduction", "Wildlife Conservation", "Animal Nutrition", "Veterinary Pathology"],
      nextSteps: ["Master of Veterinary Science (M.V.Sc)", "Specializations in Animal Surgery or Medicine"]
    },
    {
      name: "Master of Engineering (M.Tech)",
      duration: "2 years",
      description: "For diploma holders in engineering fields who want to specialize in areas like Civil, Mechanical, Electrical, etc.",
      specializations: ["Structural Engineering", "Software Engineering", "Electrical Power Systems", "Mechanical Design", "VLSI Design", "Robotics", "Automotive Engineering", "Renewable Energy", "Construction Engineering", "Environmental Engineering"],
      nextSteps: ["Ph.D. in Engineering", "Research and Development Roles"]
    },
    {
      name: "Master of Business Administration (MBA)",
      duration: "2 years",
      description: "For diploma holders in fields like engineering, hotel management, or other vocational studies, an MBA provides advanced knowledge in business management and leadership.",
      specializations: ["Finance", "Marketing", "Human Resource Management", "Operations Management", "Supply Chain Management", "Entrepreneurship", "International Business", "Project Management", "Hospitality Management"],
      nextSteps: ["Executive MBA", "Senior Management Roles"]
    },
    {
      name: "Post-Diploma in Computer Applications (PCA)",
      duration: "1 year",
      description: "For those with a diploma in computer science or IT, this course focuses on the practical applications of software, hardware, and networking.",
      specializations: ["Software Development", "Networking", "Web Development", "Database Management", "Cyber Security", "Cloud Computing", "Mobile App Development"],
      nextSteps: ["Bachelor of Technology (B.Tech) in Computer Science", "Advanced IT Certifications"]
    },
    {
      name: "Post-Diploma in Fashion Design",
      duration: "1-2 years",
      description: "For those with a diploma in fashion design, this program dives deeper into advanced fashion techniques, business aspects, and portfolio development.",
      specializations: ["Fashion Illustration", "Textile Design", "Fashion Marketing", "Apparel Production", "Costume Design", "Fashion Merchandising"],
      nextSteps: ["Bachelor of Design (B.Des.)", "Fashion Industry Roles"]
    },
    {
      name: "Post-Diploma in Interior Design",
      duration: "1-2 years",
      description: "A specialization program for diploma holders in design or architecture, focused on interior spaces, furniture design, and project management.",
      specializations: ["Residential Interior Design", "Commercial Interior Design", "Sustainable Design", "Lighting Design", "Space Planning", "Furniture Design", "3D Visualization"],
      nextSteps: ["Bachelor of Design (B.Des.)", "Interior Design Consultancy"]
    },
    {
      name: "Post-Diploma in Construction Management",
      duration: "1-2 years",
      description: "For those with a diploma in civil engineering or construction, this program prepares students for managerial roles in construction projects.",
      specializations: ["Project Planning and Control", "Construction Contracts Management", "Quantity Surveying", "Construction Safety", "Construction Project Financing"],
      nextSteps: ["Master of Construction Management", "Construction Project Management Roles"]
    }
  ],
};

const handleTabChange = (tab) => {
  setSelectedTab(tab);
  setSelectedCourse(null); // Clear the selected course when switching tabs
  setSelectedSpecialization(null); // Clear the selected specialization
};

// Handle course selection and toggle
const handleCourseSelect = (course) => {
  if (selectedCourse === course) {
    // If the same course is clicked, close the specialization
    setSelectedCourse(null);
    setSelectedSpecialization(null);
  } else {
    // Show the clicked course and reset specialization
    setSelectedCourse(course);
    setSelectedSpecialization(null);
  }
};

// Handle specialization selection
const handleSpecializationSelect = (specialization) => {
  setSelectedSpecialization(specialization);
};

return (
  <>
    <Navbar />
    <div className="Career_Container">
      <Tabs selectedTab={selectedTab} setSelectedTab={handleTabChange} />
      <div className="career_cards">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CareerDetails
          selectedTab={selectedTab}
          careerData={careerData}
          searchQuery={searchQuery}
          handleCourseSelect={handleCourseSelect}
          handleSpecializationSelect={handleSpecializationSelect}
          selectedCourse={selectedCourse}
          selectedSpecialization={selectedSpecialization}
        />
        <Footer />
      </div>
    </div>
  </>
);
};

export default App;