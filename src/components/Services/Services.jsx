import React from 'react';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z"/>
        </svg>
      ),
      title: 'Unique design',
      description: 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      title: 'Different Layout',
      description: 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z"/>
        </svg>
      ),
      title: 'Make it Simple',
      description: 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.',
      
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z"/>
        </svg>
      ),
      title: 'Responsiveness',
      description: 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z"/>
        </svg>
      ),
      title: 'Testing for Perfection',
      description: 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
        </svg>
      ),
      title: 'Advanced Options',
      description: 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.'
    }
  ];

  return (
    <>
     

      <section className="services-section" id='services'>
        <div className="services-container">
          <h1 className="services-bg-text">SERVICES</h1>
          <div className="services-header">
            <h2 className="services-title">MY Services</h2>
          </div>
          
          <div className="services-grid">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className={`service-card ${service.featured ? 'featured' : ''}`}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;