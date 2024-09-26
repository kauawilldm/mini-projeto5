


import React, { useState, useEffect } from 'react';

function DigitalLiteracy() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('/api/digital-literacy/tips')
      .then(response => response.json())
      .then(data => setTips(data))
      .catch(error => console.error('Erro ao buscar dicas:', error));
  }, []);

  return (
    <div>
      <h2>Dicas de Letramento Digital</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default DigitalLiteracy;
