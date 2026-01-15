import React from 'react';
import { FaCheckCircle, FaClock, FaMapMarkerAlt, FaChartLine } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaClock />,
      title: 'Termingarantie',
      description: 'Wir arbeiten schnell und zuverlässig'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Gezielte Verteilung',
      description: 'Wir bringen Ihre Werbemittel zuverlässig zum Verbraucher'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Zuverlässiger Service',
      description: 'Auf uns können Sie sich immer verlassen'
    },
    {
      icon: <FaChartLine />,
      title: 'Qualität',
      description: 'Alle Arbeiten werden ordnungsgemäß durchgeführt'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
