/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-badge">Über 20 Jahre Vertrauen in Hannover & Region</div>
            <h1 className="hero-title">
              Ihre Botschaft.<br />
              Direkt im Briefkasten.<br />
              <span className="highlight">Genau zur richtigen Zeit.</span>
            </h1>
            <p className="hero-subtitle">
              Wir bringen Ihre Werbebotschaft zielgenau und zuverlässig<br />
              direkt in die Briefkästen Ihrer Zielgruppe – flächendeckend,<br />
              pünktlich und mit höchster Sorgfalt.
            </p>
          <div className="hero-cta">
            <button 
              className="btn btn-secondary btn-large"
              onClick={() => scrollToSection('leistungen')}
            >
              Mehr erfahren
            </button>
          </div>
          </div>
          <div className="hero-image-section">
            <div className="hero-image-wrapper">
              <img 
                src="/images/hero-delivery.png" 
                alt="Professionelle Prospektverteilung" 
                className="hero-image"
                loading="eager"
                width="600"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
