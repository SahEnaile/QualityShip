import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/gps" activeClassName="active">GPS</NavLink>
      <NavLink to="/indicadores" activeClassName="active">Indicadores</NavLink>
      <NavLink to="/estoque" activeClassName="active">Estoque</NavLink>
    </nav>
  );
}

export default Navbar;
