import React, { useEffect, useState } from 'react';

const Accessibility = () => {
  const [accessibilityData, setAccessibilityData] = useState([]);

  useEffect(() => {
    fetch('/api/accessibility/data')
      .then((res) => res.json())
      .then((data) => setAccessibilityData(data))
      .catch((err) => console.error('Erro ao buscar dados de acessibilidade:', err));
  }, []);

  return (
    <div>
      <h2>Acessibilidade por Região</h2>
      <ul>
        {accessibilityData.map((item, index) => (
          <li key={index}>
            <strong>{item.região}</strong>: {item.acessibilidade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accessibility;
