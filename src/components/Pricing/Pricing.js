import React from 'react';
import { FaEuroSign, FaCalculator, FaClock } from 'react-icons/fa';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing section">
      <div className="container">
        <h2 className="section-title">Individuelle Preisangebote</h2>
        <p className="section-subtitle">Faire und transparente Preisgestaltung</p>
        
        <div className="pricing-content">
          <div className="pricing-text">
            <p>
              Einen Preis für eine Werbemittelverteilung zu kalkulieren, hängt maßgeblich davon ab, 
              wie dicht die Besiedelung eines Verteilgebietes ist. Außerdem beeinflussen die Auflagenhöhe, 
              der Termin und das Einzelgewicht des Werbemittels die Preisgestaltung.
            </p>
            <p>
              <strong>Kontaktieren Sie uns</strong> und teilen Sie Ihr Vorhaben mit – wir erstellen Ihnen 
              umgehend unser individuelles Preisangebot.
            </p>
          </div>
          
          <div className="pricing-factors">
            <div className="factor-card">
              <FaCalculator className="factor-icon" />
              <h4>Auflagenhöhe</h4>
              <p>Je höher die Auflage, desto günstiger der Einzelpreis</p>
            </div>
            <div className="factor-card">
              <FaEuroSign className="factor-icon" />
              <h4>Verteilgebiet</h4>
              <p>Besiedelungsdichte beeinflusst den Preis</p>
            </div>
            <div className="factor-card">
              <FaClock className="factor-icon" />
              <h4>Termin & Gewicht</h4>
              <p>Zeitpunkt und Gewicht Ihrer Werbemittel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
