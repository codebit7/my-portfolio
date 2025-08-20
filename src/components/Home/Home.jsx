import React, { useEffect, useState } from "react";
import "./Home.css";
import dotsImage from "../../../public/dots-effect.png"; 
import profileImage from "../../assets/profile-remove-bg.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);


  const CLOUDINARY_RESUME_URL = 'https://res.cloudinary.com//raw/upload/v000000/My-Resume.pdf';

  const typingTexts = [
    "Software Engineer",
    "MERN Stack Developer", 
    "Freelancer"
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  
  useEffect(() => {
    const currentString = typingTexts[currentTypeIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== currentString) {
        
        setCurrentText(currentString.substring(0, currentText.length + 1));
      } else if (isDeleting && currentText !== '') {
        
        setCurrentText(currentString.substring(0, currentText.length - 1));
      } else if (!isDeleting && currentText === currentString) {
        
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        
        setIsDeleting(false);
        setCurrentTypeIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTypeIndex, typingTexts]);

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

  const showToast = (message, type = 'success', duration = 5000) => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: '', type }), duration);
  };

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);
      showToast('Starting download...', 'info', 2000);
      
    
      const response = await fetch(CLOUDINARY_RESUME_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      
     
      if (blob.type !== 'application/pdf' && !blob.type.includes('pdf')) {
        throw new Error('Downloaded file is not a valid PDF');
      }
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Wamiq_Rahim_Resume.pdf';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
     
      window.URL.revokeObjectURL(url);
      
      showToast('✅ Resume downloaded successfully!', 'success', 3500);
    } catch (error) {
      console.error('Error downloading resume:', error);
      
      let errorMessage = 'Failed to download resume. ';
      
      if (error.message.includes('404')) {
        errorMessage += 'Resume file not found. Please check the Cloudinary URL.';
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage += 'Network error. Please check your internet connection.';
      } else if (error.message.includes('not a valid PDF')) {
        errorMessage += 'The downloaded file is corrupted or not a PDF.';
      } else {
        errorMessage += 'Please try again or contact support.';
      }
      
      showToast(`❌ ${errorMessage}`, 'error', 6000);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="hero-section" id="home">
      {toast.visible && (
        <div className={`custom-toast ${toast.type}`} role="status" aria-live="polite">
          <div className="toast-content">
            <span className="toast-message">{toast.message}</span>
          </div>
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
            <span className="typing-text">{currentText}</span>
            <span className="typing-cursor">|</span>
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
              <span className="btn-content">
                {isDownloading && <span className="download-spinner"></span>}
                {isDownloading ? 'Downloading...' : 'Download Resume'}
              </span>
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