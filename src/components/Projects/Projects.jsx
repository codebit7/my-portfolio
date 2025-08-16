import React, { useEffect } from 'react';
import './Projects.css';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with MERN stack featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard for inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sourceCode: "https://github.com/yourusername/ecommerce-website",
      liveDemo: "https://your-ecommerce-demo.netlify.app"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A comprehensive task management application with drag-and-drop functionality, real-time updates, team collaboration features, deadline tracking, and progress analytics built using React and Node.js.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sourceCode: "https://github.com/yourusername/task-management",
      liveDemo: "https://your-taskmanager-demo.netlify.app"
    }
  ];

  return (
    <section className="projects-section" id='projects'>
    <div className="projects-container">
       <h1 className="projects-bg-text">PROJECTS</h1>
          <div className="projects-header">
            <h2 className="projects-title">MY Projects</h2>
          </div>
      
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div key={project.id} className="project-card" data-aos="fade-up" data-aos-delay={idx * 200}>
            <div className="project-image-container" data-aos="zoom-in" data-aos-delay={200 + idx * 200}>
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                data-aos="fade" data-aos-delay={400 + idx * 200}
              />
              <div className="project-overlay" data-aos="fade-up" data-aos-delay={600 + idx * 200}>
                <div className="project-buttons">
                  <a 
                    href={project.sourceCode} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn source-btn"
                    data-aos="flip-left" data-aos-delay={800 + idx * 200}
                  >
                    <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn demo-btn"
                    data-aos="flip-right" data-aos-delay={900 + idx * 200}
                  >
                    <FaArrowUpRightFromSquare className="demo-icon" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content" data-aos="fade-up" data-aos-delay={1000 + idx * 200}>
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