import React from 'react';
import './App.css';
import Courses from './components/Courses';
import Accessibility from './components/Accessibility';
import DigitalLiteracy from './components/DigitalLiteracy';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bem-vindo à API de Educação Digital!</h1>
      </header>
      <main>
        <Courses />
        <Accessibility />
        <DigitalLiteracy />
      </main>
    </div>
  );
}

export default App;





