import React, { useEffect, useState } from "react";
import "./About.css";
import { LuLayers, LuWrench, LuListChecks } from "react-icons/lu";
import { fetchAbout } from '../../services/firebaseDatabaseService';
import { getTechIcon } from "./techIcons";


// Words/phrases that get highlighted in your primary color
const HIGHLIGHTS = [
   'MERN stack', 'Next.js', 'applied AI', 'Computer Science',

];

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const HIGHLIGHT_REGEX = new RegExp(
  `(${[...HIGHLIGHTS].sort((a, b) => b.length - a.length).map(escapeRegex).join('|')})`,
  'gi'
);

const highlight = (text = '') =>
  text.split(HIGHLIGHT_REGEX).map((part, i) =>
    i % 2 === 1 ? <span className="hl" key={i}>{part}</span> : part
  );

const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchAbout();
        setAboutData(
  (data || []).map((block) => ({
    ...block,
    items: block?.items?.filter(Boolean),
    steps: block?.steps?.filter(Boolean),
  }))
);
      } catch (error) {
        console.error("Failed to load about data:", error);
      }
    };
    loadData();
  }, []);

  // Firebase returns the about node as an ordered list:
  // [0] bio paragraphs, [1] technologies, [2] tools, [3] work process
  const bio = aboutData[0];
  const technologies = aboutData[1];
  const tools = aboutData[2];
  const process = aboutData[3];

  return (
    <section className="section section--alt about" id="about">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <h2 className="section-title">About me</h2>
          <p className="section-sub">A bit about who I am and how I like to work.</p>
        </div>

        <div className="about-top">
          <div className="about-bio" data-aos="fade-up">
            <p className="about-lead">{highlight(bio?.paragraphs?.[0])}</p>
<p className="about-text">{highlight(bio?.paragraphs?.[1])}</p>
          </div>

          {tools?.items?.length > 0 && (
            <aside className="panel" data-aos="fade-up" data-aos-delay="100">
              <h3 className="panel-title">
                <span className="icon-tile"><LuWrench /></span>
                {tools.title}
              </h3>
              <ul className="tool-list">
                {tools.items.map((tool) => {
                  const Icon = getTechIcon(tool);
                  return (
                    <li className="tool-item" key={tool}>
                      <Icon />
                      <span>{tool}</span>
                    </li>
                  );
                })}
              </ul>
            </aside>
          )}
        </div>

        {technologies?.items?.length > 0 && (
          <div className="about-block" data-aos="fade-up">
            <h3 className="panel-title">
              <span className="icon-tile"><LuLayers /></span>
              {technologies.title}
            </h3>
            <ul className="tech-grid">
              {technologies.items.map((tech) => {
                const Icon = getTechIcon(tech);
                return (
                  <li className="tech-chip" key={tech}>
                    <Icon />
                    <span>{tech}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {process?.steps?.length > 0 && (
          <div className="about-block" data-aos="fade-up">
            <h3 className="panel-title">
              <span className="icon-tile"><LuListChecks /></span>
              {process.title}
            </h3>
            <ol className="process">
              {process.steps.map((step, idx) => (
                <li className="process-step" key={step}>
                  <span className="step-number">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="step-name">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
