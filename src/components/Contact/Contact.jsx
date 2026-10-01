import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuMail, LuPhone, LuSend } from "react-icons/lu";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const CONTACT_ITEMS = [
  { label: 'Email', value: 'wamiqrahim@gmail.com', href: 'mailto:wamiqrahim@gmail.com', Icon: LuMail },
  { label: 'Phone', value: '+923030170314', href: 'tel:+923030170314', Icon: LuPhone },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/codebit7', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wamiq-rahim-05a83222b', Icon: FaLinkedinIn },
];

const Contact = () => {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    }
  };

  return (
    <section className="section section--alt contact" id="contact">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <h2 className="section-title">Contact</h2>
          <p className="section-sub">Have a project in mind or just want to say hi? Send me a message.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info panel" data-aos="fade-up">
            <ul className="contact-list">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.Icon;
                return (
                  <li key={item.label}>
                    <a className="contact-row" href={item.href}>
                      <span className="icon-tile"><Icon /></span>
                      <span>
                        <span className="contact-info-label">{item.label}</span>
                        <span className="contact-info-text">{item.value}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="social-links">
              {SOCIALS.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="icon-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contact-form-section panel" data-aos="fade-up" data-aos-delay="100">
            <h3 className="form-title">Send a message</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows="5"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <LuSend />
                    Send message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="map-section" data-aos="fade-up">
          <iframe
            className="map-iframe"
            title="Location map"
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
