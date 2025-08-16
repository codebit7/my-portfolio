import React, { useEffect } from "react";
import "./Home.css";
import dotsImage from "../../../public/dots-effect.png"; 
import profileImage from "../../assets/profile-remove-bg.png"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <section className="hero-section " id="home">
      <div className="hero-left">
        
        <div className="hero-content">
          <p className="intro-text" data-aos="fade-right" data-aos-delay="100">Hi There, I'm</p>
          <h1 className="name" data-aos="fade-right" data-aos-delay="200">Wamiq Rahim</h1>
          
          <h2 className="profession" data-aos="fade-left" data-aos-delay="400">Software Engineer</h2>
          <p className="description" data-aos="fade-up" data-aos-delay="500">
            I craft scalable, user-friendly web apps with clean code, blending performance, functionality, and design.
          </p>
          <div className="btns">
            <button className="contact-btn" data-aos="flip-left" data-aos-delay="600">Contact Me</button>
            <button className="resume-btn" data-aos="flip-right" data-aos-delay="700">Download Resume</button>
          </div>
        </div>
      </div>

     <div className="hero-right">
  <div className="shape-container">
    <img src={dotsImage} alt="dots" className="dots-image" />
    <div className="outer-shape" data-aos="zoom-in" data-aos-delay="200">
       <div className="inner-shape" data-aos="flip-up" data-aos-delay="400">
        <img className = "p-image" src={profileImage} alt="profile image" data-aos="fade-up" data-aos-delay="600" />
       </div>
    </div>
    
  </div>

  {/* <div className="social-icons" data-aos="fade-up" data-aos-delay="800">
    <a href="#" className="icon fb" data-aos="zoom-in" data-aos-delay="900"><FaFacebook/></a>
    <a href="#" className="icon tw" data-aos="zoom-in" data-aos-delay="1000"><FaInstagram/></a>
    <a href="#" className="icon ig" data-aos="zoom-in" data-aos-delay="1100"><FaLinkedin/></a>
    <a href="#" className="icon li" data-aos="zoom-in" data-aos-delay="1200"><FaTwitter/></a>
  </div> */}
</div>

    </section>
  );
};

export default Home;
