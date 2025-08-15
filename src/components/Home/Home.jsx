import React from "react";
import "./Home.css";
import dotsImage from "../../../public/dots-effect.png"; 
import profileImage from "../../assets/profile-remove-bg.png"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="hero-section " id="home">
      <div className="hero-left">
        
        <div className="hero-content">
          <p className="intro-text">Hi There, I'm</p>
          <h1 className="name">Wamiq Rahim</h1>
          <div className="underline"></div>
          <h2 className="profession">Software Engineer</h2>
          <p className="description">
            I build modern, scalable, and user-friendly web applications with a strong focus on backend development and clean, efficient code. Passionate about creating solutions that blend performance, functionality, and design
          </p>
          <div className="btns">
          <button className="contact-btn">Contact Me</button>
          <button className="resume-btn">Download Resume</button>
          </div>
        </div>
      </div>

     <div className="hero-right">
  <div className="shape-container">
    <img src={dotsImage} alt="dots" className="dots-image" />
    <div className="outer-shape">
       <div className="inner-shape">
        <img className = "p-image" src={profileImage} alt="profile image" />
       </div>
    </div>
    
  </div>

  

  <div className="social-icons">
    <a href="#" className="icon fb"><FaFacebook/></a>
    <a href="#" className="icon tw"><FaInstagram/></a>
    <a href="#" className="icon ig"><FaLinkedin/></a>
    <a href="#" className="icon li"><FaTwitter/></a>
  </div>
</div>

    </section>
  );
};

export default Home;
