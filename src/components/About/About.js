/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your images here
  const carouselImages = [
    '/images/crsl1.png',
    '/images/crsl2.png',
    '/images/crsl3.png',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="about section" id="ueber-uns">
      <div className="container">
        <h2 className="section-title">Über Thaqi Prospektvertrieb</h2>
        <p className="section-subtitle">Ihr zuverlässiger Partner für Werbemittelverteilung</p>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Wenn Sie einen erfahrenen Partner für Ihre Werbemittelverteilung suchen, dann wenden Sie sich an uns. 
              <strong> THAQI Prospektvertrieb</strong>, mit dem Sitz in Hannover, ist seit Jahren in der gesamten 
              Region für unsere Kunden unterwegs.
            </p>
            <p>
              Neben der Prospekt- und Flyerverteilung, bringen wir auch Kataloge, Werbeblätter und Warenproben gezielt 
              zum Verbraucher. Von der Planung bis zur Zustellung steht Ihnen das THAQI-Team professionell zur Seite. 
              Allein Sie bestimmen, wann und wo die Verteilaktion erfolgen soll.
            </p>
            <p>
              Durch jahrelange Logistikerfahrungen verläuft die Verteilung der Werbemittel termingenau. So erscheint 
              auch Ihre Werbung zur rechten Zeit, am rechten Ort. Ohne Streuverluste können wir auch, wenn es sein muss, 
              kurzfristig Ihre Verteilaktion zuverlässig und preiswert realisieren.
            </p>
          </div>
          <div className="about-carousel">
            <div className="carousel-container">
              <div className="carousel-wrapper">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                  </div>
                ))}
              </div>
              <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
                <FaChevronLeft />
              </button>
              <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
                <FaChevronRight />
              </button>
              <div className="carousel-dots">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
