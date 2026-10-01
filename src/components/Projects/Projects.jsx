import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { LuExternalLink, LuChevronDown, LuFolderGit2 } from 'react-icons/lu';
import { fetchProjects } from '../../services/firebaseDatabaseService';

const LONG_DESCRIPTION = 120; // show "Read more" only when the text is actually long

// Optional tech tags: accepts an array or a comma-separated string from any of these fields.
const getTags = (project) => {
  const raw = project.techStack || project.technologies || project.tags;
  if (!raw) return [];
  const list = Array.isArray(raw) ? raw : String(raw).split(',');
  return list.map((t) => String(t).trim()).filter(Boolean);
};

const ProjectImage = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className="project-image project-image--empty" aria-hidden="true">
        <LuFolderGit2 />
      </div>
    );
  }
  return <img src={src} alt={alt} className="project-image" loading="lazy" onError={() => setFailed(true)} />;
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to load projects:', error);
      }
    };
    loadData();
  }, []);

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">A selection of things I've designed, built and shipped.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => {
            const isOpen = !!expanded[idx];
            const tags = getTags(project);
            const isLong = (project.description || '').length > LONG_DESCRIPTION;
            const hasLinks = project.sourceCode || project.liveDemo;

            return (
              <article
                key={idx}
               className="project-card"
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
              >
                <div className="project-media">
                  <ProjectImage src={project.image} alt={project.title} />
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>

                  {tags.length > 0 && (
                    <ul className="project-stack" aria-label="Technologies used">
                      {tags.slice(0, 3).map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                      {tags.length > 3 && <li>+{tags.length - 3}</li>}
                    </ul>
                  )}

                  <p className={`project-description ${isOpen ? 'expanded' : ''}`}>{project.description}</p>

                  {isLong && (
                    <button
                      type="button"
                      className="see-more-btn"
                      aria-expanded={isOpen}
                      onClick={() => toggleExpand(idx)}
                    >
                      {isOpen ? 'Show less' : 'Read more'}
                      <LuChevronDown />
                    </button>
                  )}

                  {hasLinks && (
                    <div className="project-actions">
                      {project.sourceCode && (
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn source-btn"
                        >
                          <FaGithub />
                          Code
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn demo-btn"
                        >
                          <LuExternalLink />
                          Live demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
