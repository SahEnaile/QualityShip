import React, { useEffect, useState } from 'react';

function Rotas() {
  const [rotas, setRotas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/getRotas.php')
      .then(response => response.json())
      .then(data => setRotas(data))
      .catch(error => console.error('Erro ao buscar rotas:', error));
  }, []);

  return (
    <div>
      <h2>Rotas por Caminhões</h2>
      {rotas.length > 0 ? (
        rotas.map((rota, index) => (
          <div key={index} className={`rota ${rota.status.replace(/ /g, '-')}`}>
            <h3>{rota.nome}</h3>
            <p><strong>Origem:</strong> {rota.origem}</p>
            <p><strong>Destino:</strong> {rota.destino}</p>
            <p><strong>Status:</strong> {rota.status === 'alerta de temperatura' ? '⚠️ Alerta de Temperatura' : rota.status === 'alerta de umidade' ? '⚠️ Alerta de Umidade' : rota.status}</p>
            <p><strong>Temperatura:</strong> {rota.temperatura}°C</p>
            <p><strong>Umidade:</strong> {rota.umidade}%</p>
            <p><strong>Previsão de Chegada:</strong> {rota.previsao_chegada}</p>
          </div>
        ))
      ) : (
        <p>Carregando rotas...</p>
      )}
    </div>
  );
}

export default Rotas;
