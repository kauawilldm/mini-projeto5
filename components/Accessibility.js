import React, { useEffect, useState } from 'react';

const AccessibilityDataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/accessibility/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching accessibility data:', error));
  }, []);

  return (
    <div>
      <h2>Accessibility Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Região:</strong> {item.região} - <strong>Acessibilidade:</strong> {item.acessibilidade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccessibilityDataComponent;
