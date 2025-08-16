import React, { useEffect } from "react";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <section className="about-section " id="about">
        <h1 className="about-bg-text">ABOUT</h1>
      <div className="about-container container">
        

        <div className="about-block" data-aos="fade-right" data-aos-delay="100">
          <h3 className="about-title">About Me</h3>
          <p className="about-description">
            Hi, I’m Wamiq Rahim, a MERN stack developer who loves turning ideas into interactive, high-performing web applications. 
          </p>
          <p className="about-description">
           While I’m strongest in backend development, I enjoy creating smooth, user-friendly experiences from start to finish.
I’m always curious, always learning whether it’s optimizing a database query, experimenting with new frameworks, or polishing a UI until it feels just right. For me, coding isn’t just work; it’s a way to solve problems and make something meaningful for people.
          </p>
        </div>

       
        <div className="about-block" data-aos="fade-left" data-aos-delay="200">
          <h3 className="about-title">Tools</h3>
          <div className="tag-list">
            <span className="tag" data-aos="zoom-in" data-aos-delay="300">Visual Studio Code</span>
            <span className="tag" data-aos="zoom-in" data-aos-delay="350">Android Studio</span>
            <span className="tag" data-aos="zoom-in" data-aos-delay="400">AWS Console</span>
            {/* <span className="tag">Figma</span>
            <span className="tag">Sketch</span> */}
          </div>
        </div>

     
        <div className="about-block" data-aos="fade-up" data-aos-delay="300">
          <h3 className="about-title">Technologies and Skills</h3>
          <div className="tag-list">
            {['HTML','CSS','Media Query','Bootstrap','React','Redux','Node.js','Express.js','MongoDB','Firebase','Git','Github','REST API','JWT','MySQL','Javascript'].map((tech, idx) => (
              <span className="tag" key={tech} data-aos="zoom-in" data-aos-delay={350 + idx * 50}>{tech}</span>
            ))}
          </div>
        </div>

        
        <div className="about-block" data-aos="fade-up" data-aos-delay="400">
          <h3 className="about-title">Work Process</h3>
          <div className="work-process">
            {['Planning','Design','Development','Testing','Launch'].map((step, idx) => (
              <div className="process-step" key={step} data-aos="flip-up" data-aos-delay={450 + idx * 100}>
                <span className="step-number">#{`0${idx+1}`}</span>{step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
