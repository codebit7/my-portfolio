import React, { useEffect, useState } from 'react';
import './Experience.css';
import { LuBriefcase, LuCalendar, LuCheckCircle2, LuFolderGit2 } from 'react-icons/lu';
import { fetchExperience } from '../../services/firebaseDatabaseService';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchExperience();
        setExperience(data);
      } catch (error) {
        console.error('Failed to load experience:', error);
      }
    };
    loadData();
  }, []);

  return (
    <section className="section section--alt experience" id="experience">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">Where I've worked and what I've delivered.</p>
        </div>

        <ol className="timeline">
          {experience.map((exp, idx) => (
            <li key={idx} className="timeline-item" data-aos="fade-up">
              <span className="timeline-dot" aria-hidden="true" />

              <article className="experience-card">
                <header className="experience-header">
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="position">
                      <LuBriefcase />
                      {exp.position}
                    </p>
                  </div>
                  <span className="date-range">
                    <LuCalendar />
                    {exp.dateRange}
                  </span>
                </header>

                <ul className="responsibilities">
                  {exp.responsibilities?.map((task, i) => (
                    <li key={i}>
                      <LuCheckCircle2 />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                {exp.keyProjects?.length > 0 && (
                  <div className="projects-highlight">
                    <h4 className="projects-key-title">
                      <LuFolderGit2 />
                      Key projects developed
                    </h4>
                    <div className="project-tags">
                      {exp.keyProjects.map((p, i) => (
                        <span key={i} className="project-tag">{p}</span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
