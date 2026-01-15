import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plz: '',
    auflage: '',
    message: '',
    privacy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      alert('Bitte akzeptieren Sie die Datenschutzerklärung.');
      return;
    }

    console.log('Form Data:', formData);
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns so schnell wie möglich bei Ihnen melden.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      plz: '',
      auflage: '',
      message: '',
      privacy: false
    });
  };

  return (
    <section className="contact section" id="kontakt">
      <div className="container">
        <h2 className="section-title">Kontaktdaten</h2>
        <p className="section-subtitle">Wir freuen uns auf Ihre Nachricht</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>Thaqi Prospektvertrieb</h3>
              <p>Ihr zuverlässiger Partner für Werbemittelverteilung im Raum Hannover</p>
            </div>
            
            <div className="info-items">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>Adresse</h4>
                  <p>Hannover, Deutschland</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <h4>Telefon</h4>
                  <p><a href="tel:0511XXX">0511-XXX XXX</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>E-Mail</h4>
                  <p><a href="mailto:info@thaqi-prospektvertrieb.de">info@thaqi-prospektvertrieb.de</a></p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name / Firma *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-Mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="plz">Postleitzahl (Verteilgebiet) *</label>
                <input 
                  type="text" 
                  id="plz" 
                  name="plz"
                  value={formData.plz}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="auflage">Gewünschte Auflage</label>
              <input 
                type="text" 
                id="auflage" 
                name="auflage"
                placeholder="z.B. 5.000 Stück"
                value={formData.auflage}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Nachricht</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required 
                />
                <span>Ich habe die Datenschutzerklärung gelesen und akzeptiert. *</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              <FaPaperPlane /> Anfrage absenden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
