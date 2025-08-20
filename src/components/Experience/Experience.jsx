import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Experience.css';
import { fetchExperience } from '../../services/firebaseDatabaseService';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });

    const loadData = async () => {
      const data = await fetchExperience();
      setExperience(data);
    };
    loadData();
  }, []);

  return (
    <section className="experience-section" id='experience'>
      <div className="experience-container" data-aos="fade-up" data-aos-delay="100">
        <h1 className="experience-bg-text" data-aos="fade-right" data-aos-delay="200">EXPERIENCE</h1>
        <div className="experience-title-header" data-aos="fade-left" data-aos-delay="300">
          <h2 className="experience-title">MY Experience</h2>
        </div>

        {experience.map((exp, idx) => (
          <div key={idx} className="experience-card" data-aos="zoom-in" data-aos-delay="400">
            <div className="experience-header">
              <h3 className="company-name">{exp.company}</h3>
              <span className="date-range">{exp.dateRange}</span>
            </div>
            <h4 className="position">{exp.position}</h4>
            <div className="description">
              <ul>
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <div className="projects-highlight">
                <div className="projects-key-title">Key Projects Developed:</div>
                <div className="project-tags">
                  {exp.keyProjects.map((p, i) => (
                    <span key={i} className="project-tag">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
