import React from 'react';
import { FiMap, FiPackage, FiMonitor, FiList } from 'react-icons/fi';
import { FaHome, FaSearch, FaCog } from 'react-icons/fa';

function Home() {
  return (
    <div className="home">
   
      <header className="header">
        <button className="menu-btn">☰</button>
        <h1>QualityShip</h1>
        <input type="text" placeholder="Search any Product..." className="search-input" />
      </header>

   
      <section className="features">
        <h2>All Featured</h2>
        <div className="feature-icons">
          <div className="feature">
            <FiList size={30} />
            <p>Indicador</p>
          </div>
          <div className="feature">
            <FiMap size={30} />
            <p>GPS</p>
          </div>
          <div className="feature">
            <FiMonitor size={30} />
            <p>Monitor</p>
          </div>
          <div className="feature">
            <FiPackage size={30} />
            <p>Posições</p>
          </div>
        </div>
      </section>

    
      <section className="cards">
        <div className="card">
          <h3>Verifique as última rotas</h3>
          <img src="https://via.placeholder.com/300x150" alt="Map" />
        </div>
        <div className="card">
          <h3>Produtos com maior nível de avarias</h3>
          <img src="https://via.placeholder.com/300x150" alt="Chart" />
        </div>
        <div className="card">
          <h3>Validade e Estoque</h3>
          <img src="https://via.placeholder.com/300x150" alt="Warehouse" />
        </div>
      </section>

   
      <nav className="bottom-nav">
        <div className="nav-item">
          <FaHome size={24} />
          <p>Home</p>
        </div>
        <div className="nav-item">
          <FaSearch size={24} />
          <p>Search</p>
        </div>
        <div className="nav-item">
          <FaCog size={24} />
          <p>Setting</p>
        </div>
      </nav>
    </div>
  );
}

export default Home;
