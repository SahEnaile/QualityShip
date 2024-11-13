import React from 'react';
import { FaSearch, FaHome, FaMapMarkerAlt, FaCog } from 'react-icons/fa';

function MapPage() {
  const rotas = [
    "3º Caminhão | Rio Grande do Sul",
    "1º Caminhão | Paraná",
    "4º Caminhão | São Paulo",
    "5º Caminhão | Bahia",
    "Joinville | Zona Sul",
    "São Francisco do Sul | Centro"
  ];

  return (
    <div className="map-page">
      {/* Header */}
      <header className="header">
        <button className="menu-btn">☰</button>
        <h1>QualityShip</h1>
        <input type="text" placeholder="Search any Product..." className="search-input" />
      </header>

      {/* Map Section */}
      <section className="map-section">
        <h2>Clique em iniciar para ir até o cliente</h2>
        <img src="https://via.placeholder.com/300x200" alt="Mapa de Rota" className="map-image" />
        <button className="start-btn">Iniciar</button>
      </section>

      {/* Histórico de Trajetos */}
      <section className="history-section">
        <h3>Histórico de Trajetos</h3>
        <div className="history-list">
          {rotas.map((rota, index) => (
            <div key={index} className="history-item">
              {rota}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item">
          <FaHome size={24} />
          <p>Home</p>
        </div>
        <div className="nav-item">
          <FaMapMarkerAlt size={24} />
          <p>Map</p>
        </div>
        <div className="nav-item">
          <FaSearch size={24} />
          <p>Search</p>
        </div>
        <div className="nav-item">
          <FaCog size={24} />
          <p>Settings</p>
        </div>
      </nav>
    </div>
  );
}

export default MapPage;
