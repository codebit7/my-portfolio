import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section " id="about">
        <h1 className="about-bg-text">ABOUT</h1>
      <div className="about-container container">
        

        <div className="about-block">
          <h3 className="about-title">About Me</h3>
          <p className="about-description">
            Hello, my name is <strong>Zemo</strong> and I am UX/UI designer and
            front-end developer.
          </p>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

       
        <div className="about-block">
          <h3 className="about-title">Design Tools</h3>
          <div className="tag-list">
            <span className="tag">Adobe Xd</span>
            <span className="tag">Illustrator</span>
            <span className="tag">Photoshop</span>
            <span className="tag">Figma</span>
            <span className="tag">Sketch</span>
          </div>
        </div>

     
        <div className="about-block">
          <h3 className="about-title">Technologies and Skills</h3>
          <div className="tag-list">
            <span className="tag">Html</span>
            <span className="tag">Css</span>
            <span className="tag">Scss</span>
            <span className="tag">Less</span>
            <span className="tag">jQuery</span>
            <span className="tag">php</span>
            <span className="tag">React</span>
            <span className="tag">Javascript</span>
            <span className="tag">Graphic Design</span>
            <span className="tag">Art Design</span>
            <span className="tag">Ui/UX Design</span>
          </div>
        </div>

        
        <div className="about-block">
          <h3 className="about-title">Work Process</h3>
          <div className="work-process">
            <div className="process-step">
              <span className="step-number">#01</span> Research
            </div>
            <div className="process-step">
              <span className="step-number">#02</span> Design
            </div>
            <div className="process-step">
              <span className="step-number">#03</span> Codeing
            </div>
            <div className="process-step">
              <span className="step-number">#04</span> Launch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
