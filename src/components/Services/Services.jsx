import React, { useEffect, useState } from 'react';
import './Services.css';
import { LuCode2 } from 'react-icons/lu';
import { fetchServices } from '../../services/firebaseDatabaseService';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error('Failed to load services:', error);
      }
    };
    loadData();
  }, []);

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <h2 className="section-title">Services</h2>
          <p className="section-sub">What I can build and help you ship.</p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <article
              key={idx}
              className={`service-card ${service.featured ? 'featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={Math.min(idx, 4) * 80}
            >
              <div className="service-icon">
                {service.icon ? (
                  <span dangerouslySetInnerHTML={{ __html: service.icon }} />
                ) : (
                  <LuCode2 />
                )}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
