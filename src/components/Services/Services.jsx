import React, { useEffect, useState } from 'react';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchServices } from '../../services/firebaseDatabaseService';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });

    const loadData = async () => {
      const data = await fetchServices();
      setServices(data);
    };
    loadData();
  }, []);

  return (
    <section className="services-section" id='services'>
      <div className="services-container">
        <h1 className="services-bg-text">SERVICES</h1>
        <div className="services-header">
          <h2 className="services-title">MY Services</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card" data-aos="fade-up" data-aos-delay={idx * 100}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
