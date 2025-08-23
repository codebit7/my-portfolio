import React, { useEffect, useState } from "react";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchAbout } from '../../services/firebaseDatabaseService';

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
    const loadData = async () => {
      const data = await fetchAbout();
      setAboutData(data);
      console.log(data);
    };
    loadData();
  }, []);
  return (
    <section className="about-section" id="about">
      <h1 className="about-bg-text">ABOUT</h1>
      <div className="about-container container">
        <div className="about-block" data-aos="fade-right" data-aos-delay="100">
          <h3 className="about-title">About Me</h3>
          <p className="about-description">{aboutData[0]?.paragraphs[0]}</p>
          <p className="about-description">{aboutData[0]?.paragraphs[1]}</p>
        </div>
        <div className="about-block" data-aos="fade-left" data-aos-delay="200">
          <h3 className="about-title">{aboutData[2]?.title}</h3>
          <div className="tag-list">
            {aboutData[2]?.items?.map((tool, idx) => (
              <span className="tag" key={tool} data-aos="zoom-in" data-aos-delay={300 + idx * 50}>{tool}</span>
            ))}
          </div>
        </div>
        <div className="about-block" data-aos="fade-up" data-aos-delay="300">
          <h3 className="about-title">{aboutData[1]?.title}</h3>
          <div className="tag-list">
            {aboutData[1]?.items?.map((tech, idx) => (
              <span className="tag" key={tech} data-aos="zoom-in" data-aos-delay={350 + idx * 50}>{tech}</span>
            ))}
          </div>
        </div>
        <div className="about-block" data-aos="fade-up" data-aos-delay="400">
          <h3 className="about-title">{aboutData[3]?.title}</h3>
          <div className="work-process">
            {aboutData[3]?.steps?.map((step, idx) => (
              <div className="process-step" key={step} data-aos="flip-up" data-aos-delay={450 + idx * 100}>
                <span className="step-number">#{`0${idx + 1}`}</span>{step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
