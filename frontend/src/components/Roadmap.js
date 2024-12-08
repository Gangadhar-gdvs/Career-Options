import React, { useState } from 'react';
import './Roadmap.css';

const careerTree = {
  title: "Career Roadmap",
  defaultExpanded: true,
  children: [
    {
      title: "After 10th",
      children: [
        {
          title: "Science Stream",
          description: "Pursue Physics, Chemistry, Biology/Math",
          children: [
            { title: "Engineering", description: "Various branches like Computer Science, Mechanical, Electrical, etc." },
            { title: "Medicine", description: "MBBS, BDS, BAMS, etc." },
            { title: "Research", description: "BSc in various scientific fields" }
          ]
        },
        {
          title: "Commerce Stream",
          description: "Study Business, Accountancy, Economics",
          children: [
            { title: "Chartered Accountancy", description: "Professional accounting and finance" },
            { title: "Business Management", description: "BBA, followed by MBA" },
            { title: "Economics", description: "BA/BSc in Economics" }
          ]
        },
        {
          title: "Arts/Humanities Stream",
          description: "Explore Literature, History, Political Science",
          children: [
            { title: "Law", description: "LLB, integrated law programs" },
            { title: "Journalism", description: "BA in Journalism and Mass Communication" },
            { title: "Social Sciences", description: "BA in Psychology, Sociology, etc." }
          ]
        },
        { title: "Vocational Courses", description: "Learn practical skills in IT, Healthcare, Hospitality" }
      ]
    },
    {
      title: "After 12th",
      children: [
        {
          title: "Bachelor's Degree",
          description: "Higher education in various fields",
          children: [
            { title: "Engineering (B.Tech/BE)", description: "4-year degree in engineering disciplines" },
            { title: "Medical (MBBS)", description: "5.5-year degree in medicine" },
            { title: "Arts (BA)", description: "3-year degree in humanities subjects" },
            { title: "Commerce (BCom)", description: "3-year degree in commerce and business" },
            { title: "Science (BSc)", description: "3-year degree in scientific disciplines" }
          ]
        },
        { title: "Diploma Courses", description: "Short-term professional courses" },
        { title: "Professional Certifications", description: "Industry-recognized certifications" },
        { title: "Entrepreneurship", description: "Start your own business" }
      ]
    },
    {
      title: "After Degree", 
      children: [
        {
          title: "Post Graduation",
          description: "Master's degree or PhD",
          children: [
            { title: "Master's (MA/MSc/MCom)", description: "2-year advanced degree" },
            { title: "PhD", description: "Doctorate degree for research" }
          ]
        },
        { title: "MBA", description: "Master of Business Administration" },
        { title: "Civil Services", description: "UPSC and other competitive exams" },
        { title: "Corporate Jobs", description: "Roles in companies and startups" },
        { title: "Research & Development", description: "Scientific or technological advancements" }
      ]
    }
  ]
};

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(node.defaultExpanded || false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tree-node">
      <div className="node-content" onClick={toggleExpand}>
        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
          {node.children && node.children.length > 0 ? (isExpanded ? '▼' : '▶') : '•'}
        </span>
        <span className="node-title">{node.title}</span>
      </div>
      {node.description && (
        <div className="node-description">{node.description}</div>
      )}
      {isExpanded && node.children && (
        <div className="node-children">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">Career Roadmap</h1>
      <div className="tree-container">
        <TreeNode node={careerTree} />
      </div>
    </div>
  );
};

export default Roadmap;
