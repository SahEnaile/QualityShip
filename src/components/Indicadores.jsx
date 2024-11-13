import React, { useEffect, useState } from 'react';

function Indicadores() {
  const [indicadores, setIndicadores] = useState([]);

  useEffect(() => {
    fetch('http://localhost/backend/api/getIndicadores.php')
      .then(response => response.json())
      .then(data => setIndicadores(data));
  }, []);

  return (
    <div className="indicadores">
      <h1>Indicadores</h1>
      {indicadores.map((indicador, index) => (
        <div key={index} className="indicador-card">
          <p>{indicador.nome}: {indicador.valor}</p>
        </div>
      ))}
    </div>
  );
}

export default Indicadores;
