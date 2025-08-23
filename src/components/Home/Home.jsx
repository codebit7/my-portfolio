import React, { useEffect, useState } from "react";
import "./Home.css";
import dotsImage from "../../../public/dots-effect.png"; 
import profileImage from "../../assets/profile-remove-bg.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

 
  const url = "https://drive.google.com/uc?export=download&id=1HLWkUsoWZTCbh08fhDzSqQd3cRh_9mME";

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

  
  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Wamiq_Rahim_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

     
      toast.success("Resume downloaded successfully!");

      setTimeout(() => setIsDownloading(false), 2000);
    } catch (error) {
      console.error("Download failed:", error);

      
      toast.error("Failed to download resume. Please try again!");

      setIsDownloading(false);
    }
  };

  return (
    <>
      <section className="hero-section" id="home">
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
              <a
                className={`resume-btn ${isDownloading ? 'downloading' : ''}`}
                data-aos="flip-right"
                data-aos-delay="400"
                onClick={handleDownload}
                style={isDownloading ? { pointerEvents: 'none', opacity: 0.8 } : {}}
                rel="noopener"
              >
                <span className="btn-content">
                  {isDownloading && <span className="download-spinner"></span>}
                  {isDownloading ? 'Downloading...' : 'Download Resume'}
                </span>
              </a>
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

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default Home;
