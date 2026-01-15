/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
import React, { useState } from 'react';
import './Areas.css';

const Areas = () => {
  const [hoveredArea, setHoveredArea] = useState(null);

  const hanoverDistricts = [
    'Mitte', 'Vahrenwald-List', 'Bothfeld-Vahrenheide', 'Buchholz-Kleefeld',
    'Misburg-Anderten', 'Kirchrode-Bemerode-Wülferode', 'Südstadt-Bult',
    'Döhren-Wülfel', 'Ricklingen', 'Ahlem-Limmer', 'Linden-Limmer',
    'Nord', 'Herrenhausen-Stöcken'
  ];

  return (
    <section className="areas section" id="verteilgebiete">
      <div className="container">
        <h2 className="section-title">Verteilgebiete</h2>
        <p className="section-subtitle">Einsatzgebiete in der Region Hannover</p>
        
        <div className="areas-content">
          <div className="map-container">
            <div className="map-wrapper">
              <svg viewBox="0 0 1000 900" xmlns="http://www.w3.org/2000/svg">
                
                {/* Gradient Definitions */}
                <defs>
                  {/* Gray Gradient */}
                  <linearGradient id="grayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#e5e7eb', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#d1d5db', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="grayGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#b8bcc4', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#9ca3af', stopOpacity: 1}} />
                  </linearGradient>

                  {/* Green Gradient */}
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#6ec9a8', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#5ea88e', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="greenGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#5ab591', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#4a9078', stopOpacity: 1}} />
                  </linearGradient>

                  {/* Blue Gradient */}
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#bddcee', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#a8cce0', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="blueGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#9fc9dd', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#8ab8d4', stopOpacity: 1}} />
                  </linearGradient>

                  {/* Hannover Gradient */}
                  <linearGradient id="hannoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#e0e1f5', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#d1d5db', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#c4c8d4', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="hannoverGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#c7c9e8', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#a5aac4', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#9ca3af', stopOpacity: 1}} />
                  </linearGradient>

                  {/* Lake Gradient */}
                  <linearGradient id="lakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#7ec3e8', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#6BA3D6', stopOpacity: 1}} />
                  </linearGradient>

                  {/* Shadow filters */}
                  <filter id="districtShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="0" dy="2" result="offsetblur"/>
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.2"/>
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Neustadt am Rübenberge */}
                <path
                  d="M 80,80 L 180,50 L 280,70 L 300,150 L 260,220 L 180,240 L 100,200 L 60,140 Z"
                  className={`district-path gray ${hoveredArea === 'neustadt' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('neustadt')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="170" y="140" className="district-text small">Neustadt am</text>
                <text x="170" y="160" className="district-text small">Rübenberge</text>

                {/* Steinhuder Meer (Lake) */}
                <path
                  d="M 60,250 L 100,230 L 140,250 L 130,290 L 90,300 L 50,280 Z"
                  className="lake-path"
                  fill="none"
                  stroke="#6BA3D6"
                  strokeWidth="2"
                />
                <text x="95" y="265" className="lake-text">Steinhuder</text>
                <text x="95" y="280" className="lake-text">Meer</text>

                {/* Wedemark */}
                <path
                  d="M 300,70 L 420,50 L 500,90 L 510,180 L 450,230 L 360,220 L 300,170 Z"
                  className={`district-path green ${hoveredArea === 'wedemark' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('wedemark')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="400" y="140" className="district-text white">Wedemark</text>

                {/* Langenhagen */}
                <path
                  d="M 300,170 L 360,220 L 450,230 L 460,290 L 420,340 L 340,340 L 290,290 L 280,220 Z"
                  className={`district-path green ${hoveredArea === 'langenhagen' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('langenhagen')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="360" y="280" className="district-text white small">Langen-</text>
                <text x="360" y="300" className="district-text white small">hagen</text>

                {/* Burgdorf */}
                <path
                  d="M 700,100 L 800,90 L 860,150 L 850,240 L 780,280 L 700,250 L 680,170 Z"
                  className={`district-path green ${hoveredArea === 'burgdorf' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('burgdorf')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="770" y="180" className="district-text white">Burgdorf</text>

                {/* Uetze */}
                <path
                  d="M 860,150 L 950,140 L 980,220 L 960,300 L 880,310 L 850,240 Z"
                  className={`district-path green ${hoveredArea === 'uetze' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('uetze')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="910" y="220" className="district-text white">Uetze</text>

                {/* Largnedel (Burgwedel) */}
                <path
                  d="M 510,90 L 620,80 L 700,120 L 700,200 L 640,250 L 560,240 L 510,180 Z"
                  className={`district-path gray ${hoveredArea === 'largnedel' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('largnedel')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="600" y="160" className="district-text">Largnedel</text>

                {/* Isernhagen */}
                <path
                  d="M 560,240 L 640,250 L 680,300 L 660,360 L 600,380 L 540,350 L 520,290 Z"
                  className={`district-path gray ${hoveredArea === 'isernhagen' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('isernhagen')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="590" y="310" className="district-text small">Isernhagen</text>

                {/* Garbsen - Highlighted Green */}
                <path
                  d="M 200,280 L 290,290 L 320,350 L 300,420 L 240,440 L 180,400 L 170,330 Z"
                  className={`district-path green ${hoveredArea === 'garbsen' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('garbsen')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="245" y="360" className="district-text white">Garbsen</text>

                {/* Wanstorf */}
                <path
                  d="M 80,300 L 170,290 L 200,350 L 180,420 L 120,440 L 60,400 L 50,340 Z"
                  className={`district-path gray ${hoveredArea === 'wanstorf' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('wanstorf')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="120" y="370" className="district-text">Wanstorf</text>

                {/* Seelze */}
                <path
                  d="M 180,420 L 240,440 L 280,500 L 260,560 L 200,580 L 140,540 L 140,470 Z"
                  className={`district-path gray ${hoveredArea === 'seelze' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('seelze')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="200" y="510" className="district-text">Seelze</text>

                {/* HANNOVER - Center */}
                <path
                  d="M 320,350 L 420,340 L 520,360 L 580,420 L 600,500 L 560,580 L 480,620 L 400,620 L 320,580 L 280,500 L 300,420 Z"
                  className={`district-path hannover ${hoveredArea === 'hannover' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('hannover')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="440" y="490" className="district-text-main">HANNOVER</text>

                {/* Lehrte */}
                <path
                  d="M 680,320 L 780,300 L 850,360 L 860,450 L 800,500 L 720,490 L 660,430 L 660,370 Z"
                  className={`district-path gray ${hoveredArea === 'lehrte' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('lehrte')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="760" y="400" className="district-text">Lehrte</text>

                {/* Barsinghausen */}
                <path
                  d="M 60,480 L 140,470 L 180,540 L 160,620 L 100,660 L 40,620 L 30,540 Z"
                  className={`district-path gray ${hoveredArea === 'barsinghausen' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('barsinghausen')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="100" y="560" className="district-text small">Barsing-</text>
                <text x="100" y="580" className="district-text small">hausen</text>

                {/* Gehrden - Highlighted Light Blue */}
                <path
                  d="M 200,580 L 260,560 L 300,600 L 290,670 L 240,700 L 180,680 L 160,620 Z"
                  className={`district-path lightblue ${hoveredArea === 'gehrden' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('gehrden')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="230" y="640" className="district-text">Gehrden</text>

                {/* Ronnenberg */}
                <path
                  d="M 290,620 L 340,600 L 380,640 L 370,700 L 320,720 L 280,690 Z"
                  className={`district-path lightblue ${hoveredArea === 'ronnenberg' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('ronnenberg')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="325" y="660" className="district-text small">Ronnen-</text>
                <text x="325" y="680" className="district-text small">berg</text>

                {/* Hemmingen */}
                <path
                  d="M 380,640 L 440,630 L 480,680 L 460,740 L 400,760 L 360,720 Z"
                  className={`district-path gray ${hoveredArea === 'hemmingen' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('hemmingen')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="420" y="690" className="district-text small">Hem-</text>
                <text x="420" y="710" className="district-text small">mingen</text>

                {/* Laatzen */}
                <path
                  d="M 480,640 L 560,620 L 600,680 L 580,750 L 520,780 L 460,750 L 450,690 Z"
                  className={`district-path gray ${hoveredArea === 'laatzen' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('laatzen')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="520" y="700" className="district-text">Laatzen</text>

                {/* Sehnde - Highlighted Green */}
                <path
                  d="M 650,500 L 740,490 L 800,550 L 790,640 L 720,680 L 640,650 L 620,580 Z"
                  className={`district-path green ${hoveredArea === 'sehnde' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('sehnde')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="710" y="580" className="district-text white">Sehnde</text>

                {/* Wennigsen (Deister) */}
                <path
                  d="M 180,700 L 260,710 L 300,770 L 280,830 L 210,850 L 150,810 L 140,750 Z"
                  className={`district-path gray ${hoveredArea === 'wennigsen' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('wennigsen')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="220" y="770" className="district-text small">Wennigsen</text>
                <text x="220" y="790" className="district-text small">(Deister)</text>

                {/* Pattensen */}
                <path
                  d="M 460,760 L 540,750 L 580,800 L 560,860 L 500,880 L 440,850 L 430,800 Z"
                  className={`district-path gray ${hoveredArea === 'pattensen' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('pattensen')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="500" y="810" className="district-text small">Patten-</text>
                <text x="500" y="830" className="district-text small">sen</text>

                {/* Springe */}
                <path
                  d="M 280,830 L 360,820 L 420,860 L 400,920 L 340,950 L 260,920 L 250,870 Z"
                  className={`district-path gray ${hoveredArea === 'springe' ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredArea('springe')}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                <text x="340" y="880" className="district-text">Springe</text>

              </svg>

              {/* Hover Info Card */}
              {hoveredArea && (
                <div className="hover-info-card">
                  {hoveredArea === 'hannover' ? (
                    <>
                      <h4>Stadt Hannover</h4>
                      <p className="info-subtitle">Alle 13 Stadtteile:</p>
                      <div className="district-list">
                        {hanoverDistricts.map((district, idx) => (
                          <span key={idx} className="district-tag">{district}</span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h4>{hoveredArea.charAt(0).toUpperCase() + hoveredArea.slice(1)}</h4>
                      <p>Umland • Vollständige Abdeckung</p>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="map-legend">
              <div className="legend-item">
                <div className="legend-color hannover-color"></div>
                <span>Stadt Hannover</span>
              </div>
              <div className="legend-item">
                <div className="legend-color green-color"></div>
                <span>Hauptverteilgebiete</span>
              </div>
              <div className="legend-item">
                <div className="legend-color lightblue-color"></div>
                <span>Weitere Verteilgebiete</span>
              </div>
              <div className="legend-item">
                <div className="legend-color gray-color"></div>
                <span>Region Hannover</span>
              </div>
            </div>
          </div>

          <div className="areas-note">
            <div className="note-box">
              <h3>Umland & Region</h3>
              <p>
                Wir decken die gesamte Region Hannover ab: Garbsen, Langenhagen, Laatzen, Lehrte, Sehnde, Gehrden, Isernhagen und viele weitere Gemeinden.
              </p>
              <p>
                Flächendeckende Zustellung in allen Gebieten mit höchster Zuverlässigkeit.
              </p>
              <div className="coverage-stats">
                <div className="stat-item">
                  <div className="stat-number">13</div>
                  <div className="stat-label">Stadtteile</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Gemeinden</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Abdeckung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
