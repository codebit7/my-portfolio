import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <section className="experience-section" id='experience'>
      <div className="experience-container" data-aos="fade-up" data-aos-delay="100">
        <h1 className="experience-bg-text" data-aos="fade-right" data-aos-delay="200">EXPERIENCE</h1>
        <div className="experience-title-header" data-aos="fade-left" data-aos-delay="300">
          <h2 className="experience-title">MY Experience</h2>
        </div>
        <div className="experience-card" data-aos="zoom-in" data-aos-delay="400">
          <div className="experience-header">
            <h3 className="company-name" data-aos="fade-right" data-aos-delay="500">DevelopersHub Corporation</h3>
            <span className="date-range" data-aos="fade-left" data-aos-delay="600">March - July 2025</span>
          </div>
          <h4 className="position" data-aos="fade-up" data-aos-delay="700">Full Stack Developer Intern</h4>
          <div className="description">
            <ul>
              <li data-aos="fade-up" data-aos-delay="800">Gained comprehensive experience in MERN stack technology (MongoDB, Express.js, React.js, Node.js)</li>
              <li data-aos="fade-up" data-aos-delay="850">Developed and deployed two full-scale web applications during the internship period</li>
              <li data-aos="fade-up" data-aos-delay="900">Collaborated with development team to implement modern web development practices</li>
              <li data-aos="fade-up" data-aos-delay="950">Enhanced skills in both frontend and backend development through hands-on project work</li>
              <li data-aos="fade-up" data-aos-delay="1000">Participated in code reviews and agile development methodologies</li>
            </ul>
            <div className="projects-highlight" data-aos="fade-up" data-aos-delay="1050">
              <div className="projects-key-title">Key Projects Developed:</div>
              <div className="project-tags">
                <span className="project-tag" data-aos="zoom-in" data-aos-delay="1100">E-commerce Website</span>
                <span className="project-tag" data-aos="zoom-in" data-aos-delay="1150">Task Management System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;