/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'leistungen', label: 'Leistungen' },
    { id: 'ueber-uns', label: 'Über uns' },
    { id: 'verteilgebiete', label: 'Verteilgebiete' },
    { id: 'kontakt', label: 'Kontakt', primary: true }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo" onClick={() => scrollToSection('hero')}>
              <img 
                src="/images/logo.png" 
                alt="Thaqi Prospektvertrieb Logo" 
                className="logo-image" 
                loading="eager"
                width="90"
                height="90"
              />
            </div>

            <nav className="nav-desktop" aria-label="Hauptnavigation">
              <ul className="nav-list">
                {navItems.map(({ id, label, primary }) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(id)}
                      className={primary ? 'nav-kontakt' : 'nav-link'}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <button 
              className="hamburger" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <ul className="nav-list">
          {navItems.map(({ id, label, primary }) => (
            <li key={`mobile-${id}`}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
                className={primary ? 'nav-kontakt' : 'nav-link'}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && <div className="mobile-nav-overlay" onClick={closeMenu} aria-hidden="true"></div>}
    </>
  );
};

export default Header;
