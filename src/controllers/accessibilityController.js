


const getAccessibilityData = (req, res) => {
  const data = [
    { região: 'Norte', acessibilidade: 'Baixa' },
    { região: 'Sul', acessibilidade: 'Alta' },
    { região: 'Nordeste', acessibilidade: 'Média' },
    { região: 'Centro-Oeste', acessibilidade: 'Média' },
    { região: 'Sudeste', acessibilidade: 'Alta' }
  ];
  res.json(data);
};

module.exports = { getAccessibilityData };

