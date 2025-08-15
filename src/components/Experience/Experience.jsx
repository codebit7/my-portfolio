import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id='experience'>
    <div className="experience-container">
       <h1 className="experience-bg-text">EXPERIENCE</h1>
          <div className="experience-title-header">
            <h2 className="experience-title">MY Experience</h2>
          </div>
      
      <div className="experience-card">
        <div className="experience-header">
          <h3 className="company-name">DevelopersHub Corporation</h3>
          <span className="date-range">March - July 2025</span>
        </div>
        
        <h4 className="position">Full Stack Developer Intern</h4>
        
        <div className="description">
          <ul>
            <li>Gained comprehensive experience in MERN stack technology (MongoDB, Express.js, React.js, Node.js)</li>
            <li>Developed and deployed two full-scale web applications during the internship period</li>
            <li>Collaborated with development team to implement modern web development practices</li>
            <li>Enhanced skills in both frontend and backend development through hands-on project work</li>
            <li>Participated in code reviews and agile development methodologies</li>
          </ul>
          
          <div className="projects-highlight">
            <div className="projects-key-title">Key Projects Developed:</div>
            <div className="project-tags">
              <span className="project-tag">E-commerce Website</span>
              <span className="project-tag">Task Management System</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Experience;