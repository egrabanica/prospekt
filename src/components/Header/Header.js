import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent body scroll when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

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
    closeMobileMenu();
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <img 
              src=\"/images/logo.png\" 
              alt=\"Thaqi Prospektvertrieb Logo\" 
              className=\"logo-image\" 
              loading=\"eager\"
              width=\"90\"
              height=\"90\"
            />
          </div>

          <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('hero')} className="nav-link">Home</button></li>
              <li><button onClick={() => scrollToSection('leistungen')} className="nav-link">Leistungen</button></li>
              <li><button onClick={() => scrollToSection('ueber-uns')} className="nav-link">Über uns</button></li>
              <li><button onClick={() => scrollToSection('verteilgebiete')} className="nav-link">Verteilgebiete</button></li>
              <li><button onClick={() => scrollToSection('kontakt')} className="nav-kontakt">Kontakt</button></li>
            </ul>
          </nav>

          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
