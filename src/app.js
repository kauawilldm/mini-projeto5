import React from 'react';
import Courses from './components/Courses';
import Accessibility from './components/Accessibility';
import DigitalLiteracy from './components/DigitalLiteracy';

function App() {
  return (
    <div className="App">
      <h1>Educação e Tecnologia</h1>
      <Courses />
      <Accessibility />
      <DigitalLiteracy />
    </div>
  );
}

export default App;


const express = require('express');
const router = express.Router();
const accessibilityController = require('../controllers/accessibilityController');


router.get('/data', accessibilityController.getAccessibilityData);

module.exports = router;

