/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
import React from 'react';
import './Footer.css';

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Thaqi Prospektvertrieb</h4>
            <p>
              Ihre zuverlässige Lösung für Prospektverteilung in Hannover und Umgebung. 
              Professionell, termingenau und mit höchster Qualität.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
              <li><a onClick={() => scrollToSection('leistungen')}>Leistungen</a></li>
              <li><a onClick={() => scrollToSection('ueber-uns')}>Über uns</a></li>
              <li><a onClick={() => scrollToSection('verteilgebiete')}>Verteilgebiete</a></li>
              <li><a onClick={() => scrollToSection('kontakt')}>Kontakt</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Rechtliches</h4>
            <ul>
              <li><a href="#impressum">Impressum</a></li>
              <li><a href="#datenschutz">Datenschutz</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Kontakt</h4>
            <p>
              Hannover, Deutschland<br />
              Tel: +49 176 23364770<br />
              E-Mail: dritonthaqi1980@outlook.com
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Thaqi Prospektvertrieb. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
