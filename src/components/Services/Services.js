import React from 'react';
import { FaHome, FaMapMarkedAlt, FaBriefcase, FaTags } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'Haushaltsdirektverteilung',
      description: 'Flächendeckende Zustellung an private Haushalte in Hannover und Umgebung.'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Selektive Verteilung',
      description: 'Zielgruppengenaue Ansprache nach Stadtteilen oder spezifischen Postleitzahlen.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Geschäftskunden-Service',
      description: 'Verteilung von Katalogen und Flyern direkt an Gewerbebetriebe und Büros.'
    },
    {
      icon: <FaTags />,
      title: 'Sonderwerbeformen',
      description: 'Verteilung von Warenproben oder Türanhängern.'
    }
  ];

  return (
    <section className="services section" id="leistungen">
      <div className="container">
        <h2 className="section-title">Unsere Leistungen</h2>
        <p className="section-subtitle">Maßgeschneiderte Vertriebslösungen für Ihren Erfolg</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
