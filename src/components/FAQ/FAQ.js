import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Wie wird die Qualität geprüft?',
      answer: 'Durch stichprobenartige Kontrollen vor Ort und transparente Verteilberichte für unsere Kunden. Wir setzen auf GPS-Überwachung und regelmäßige Qualitätskontrollen.'
    },
    {
      question: 'Werden "Keine Werbung"-Aufkleber beachtet?',
      answer: 'Ja, wir respektieren den Verbraucherwillen und verteilen ausschließlich an Haushalte ohne Sperrvermerk.'
    },
    {
      question: 'Wie kurzfristig kann eine Verteilung starten?',
      answer: 'Nach Absprache können wir oft innerhalb weniger Tage mit Ihrer Kampagne beginnen. Kontaktieren Sie uns für eine genaue Terminabsprache.'
    },
    {
      question: 'Welche Verteilgebiete decken Sie ab?',
      answer: 'Wir decken die gesamte Region Hannover ab, einschließlich aller Stadtteile sowie Garbsen, Langenhagen, Laatzen, Lehrte und das gesamte Umland.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section">
      <div className="container">
        <h2 className="section-title">Häufig gestellte Fragen</h2>
        <p className="section-subtitle">Alles, was Sie über unseren Service wissen müssen</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <FaChevronDown className="faq-icon" />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
