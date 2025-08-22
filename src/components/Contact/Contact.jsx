import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';


const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
 

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all required fields!', { position: "top-right" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address!', { position: "top-right" });
      return;
    }

    setIsSubmitting(true);
    setShowLoading(true);
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: import.meta.env.VITE_TO_EMAIL,
        reply_to: formData.email,
        timestamp: new Date().toLocaleString()
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast.success('Message sent successfully! I will get back to you soon.', { position: "top-right", autoClose: 5000 });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to send message. Please try again or contact me directly!', { position: "top-right", autoClose: 5000 });
  setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
      setShowLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <div className="contact-container" data-aos="fade-up" data-aos-delay="100">
        <h1 className="contact-bg-text" data-aos="fade-right" data-aos-delay="200">CONTACT</h1>
        <div className="contact-header" data-aos="fade-left" data-aos-delay="300">
          <h2 className="contact-title">CONTACT ME</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-up" data-aos-delay="400">
            <div className="contact-info-item">
              <h3 className="contact-info-label">Email</h3>
              <p className="contact-info-text">wamiqrahim@gmail.com</p>
              
            </div>
            <div className="contact-info-item">
              <h3 className="contact-info-label">Phone</h3>
              <p className="contact-info-text">+923030170314</p>
              <div className="social-links">
                <a href="https://github.com/codebit7" className="social-link" data-aos="zoom-in" data-aos-delay="500">
                  <FaGithub size={16} />
                </a>
               
                <a href="www.linkedin.com/in/wamiq-rahim-05a83222b" className="social-link" data-aos="zoom-in" data-aos-delay="650">
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section" id='contact' data-aos="fade-up" data-aos-delay="700">
            <h3 className="form-title">Get In Touch</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    data-aos="fade-right"
                    data-aos-delay="750"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    data-aos="fade-left"
                    data-aos-delay="800"
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  data-aos="fade-up"
                  data-aos-delay="850"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your message *"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows="5"
                  data-aos="fade-up"
                  data-aos-delay="900"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="map-section" data-aos="fade-up" data-aos-delay="1000">
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13609.40111641123!2d74.2535224!3d31.4476545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017432b1835b%3A0xe396992a5b05891c!2sUniversity%20of%20Central%20Punjab!5e0!3m2!1sen!2s!4v1656845342493!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
