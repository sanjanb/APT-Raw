// src/components/Services.js
import React from "react";

const services = [
  {
    id: 1,
    title: "Installation",
    description: "Professional installation of all our products.",
  },
  {
    id: 2,
    title: "Maintenance",
    description: "Regular maintenance services for longevity of products.",
  },
  {
    id: 3,
    title: "Support",
    description: "24/7 customer support for any queries or issues.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={`/services/${service.id}`} className="cta-button">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
