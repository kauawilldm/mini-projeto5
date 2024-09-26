//  // Modelo para dicas de alfabetização digital
// const digitalLiteracyTips = [
//     'Use senhas fortes e únicas para cada conta.',
//     'Habilite a autenticação de dois fatores.',
//     'Cuidado com e-mails e links suspeitos.'
//   ];
  
//   module.exports = digitalLiteracyTips;
  
// const digitalLiteracyTips = [
//   { id: 1, tip: 'Use senhas fortes.' },
//   { id: 2, tip: 'Atualize seu software regularmente.' }
// ];

// module.exports = digitalLiteracyTips;

// src/models/digitalLiteracyModel.js
// const digitalLiteracyTips = [
//     { id: 1, tip: 'Mantenha suas senhas seguras e únicas.' },
//     { id: 2, tip: 'Cuidado com emails e links suspeitos.' },
//     { id: 3, tip: 'Use autenticação de dois fatores sempre que possível.' }
//   ];
  
//   module.exports = digitalLiteracyTips;
  

// const digitalLiteracyTips = [
//     { tip: 'Use senhas fortes e únicas para cada conta.' },
//     { tip: 'Tenha cuidado com e-mails e links suspeitos.' }
//   ];
  
//   module.exports = digitalLiteracyTips;
  
  

const express = require('express');
const router = express.Router();
const digitalLiteracyController = require('../controllers/digitalLiteracyController');

router.get('/tips', digitalLiteracyController.getDigitalLiteracyTips);

module.exports = router;
