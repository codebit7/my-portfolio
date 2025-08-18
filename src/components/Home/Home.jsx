import React, { useEffect, useState } from "react";
import "./Home.css";
import dotsImage from "../../../public/dots-effect.png"; 
import profileImage from "../../assets/profile-remove-bg.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const handleContactMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);
      setDownloadStatus(null);
      
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/resume/Wamiq_Rahim_Resume.pdf';
        link.download = 'Wamiq_Rahim_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setDownloadStatus({ 
          type: 'success', 
          message: 'Resume downloaded successfully!' 
        });
        setIsDownloading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error downloading resume:', error);
      setDownloadStatus({ 
        type: 'error', 
        message: 'Failed to download resume. Please try again.' 
      });
      setIsDownloading(false);
    }
    
    setTimeout(() => setDownloadStatus(null), 3000);
  };

  return (
    <section className="hero-section" id="home">
      {downloadStatus && (
        <div className={`download-status ${downloadStatus.type}`}>
          {downloadStatus.message}
        </div>
      )}
      
      <div className="hero-left">
        <div className="hero-content">
          <p className="intro-text" data-aos="fade-right" data-aos-delay="100">
            Hi There, I'm
          </p>
          <h1 className="name" data-aos="fade-right" data-aos-delay="200">
            Wamiq Rahim
          </h1>
          <h2 className="profession" data-aos="fade-left" data-aos-delay="400">
            Software Engineer
          </h2>
          <p className="description" data-aos="fade-up" data-aos-delay="500">
            I craft scalable, user-friendly web apps with clean code, blending performance, functionality, and design.
          </p>
          <div className="btns">
            <button 
              className="contact-btn" 
              data-aos="flip-left" 
              data-aos-delay="600"
              onClick={handleContactMe}
            >
              Contact Me
            </button>
            <button 
              className={`resume-btn ${isDownloading ? 'downloading' : ''}`}
              data-aos="flip-right" 
              data-aos-delay="700"
              onClick={handleDownloadResume}
              disabled={isDownloading}
            >
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </button>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="shape-container">
          <img src={dotsImage} alt="dots" className="dots-image" />
          <div className="outer-shape" data-aos="zoom-in" data-aos-delay="200">
            <div className="inner-shape" data-aos="flip-up" data-aos-delay="400">
              <img 
                className="p-image" 
                src={profileImage} 
                alt="profile image" 
                data-aos="fade-up" 
                data-aos-delay="600" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;