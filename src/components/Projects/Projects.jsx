import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchProjects } from '../../services/firebaseDatabaseService';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });

    const loadData = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    loadData();
  }, []);

  return (
    <section className="projects-section" id='projects'>
      <div className="projects-container">
        <h1 className="projects-bg-text">PROJECTS</h1>
        <div className="projects-header">
          <h2 className="projects-title">MY Projects</h2>
        </div>
      
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card" data-aos="fade-up" data-aos-delay={idx * 200}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-buttons">
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="project-btn source-btn">
                      Source Code
                    </a>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-btn demo-btn">
                      <FaArrowUpRightFromSquare className="demo-icon" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
