



import React, { useState, useEffect } from 'react';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Adicionando estado de carregamento

  useEffect(() => {
    console.log('Fetching courses...'); // Log de depuração
    fetch('/api/courses/free')
      .then(response => {
        console.log('Response status:', response.status); // Loga o status da resposta
        return response.json();
      })
      .then(data => {
        console.log('Cursos recebidos:', data); // Log de depuração para os dados recebidos
        setCourses(data);
        setIsLoading(false); // Define o estado de carregamento como falso
      })
      .catch(error => {
        console.error('Erro ao buscar cursos:', error); // Log de erro
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Carregando cursos...</div>;  // Mostra carregamento enquanto os cursos não são carregados
  }

  if (!courses.length) {
    return <div>Nenhum curso disponível no momento.</div>; // Mensagem se não houver cursos
  }

  return (
    <div>
      <h2>Cursos Gratuitos</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.titulo}</strong> - {course.plataforma} - <a href={course.link}>Acessar</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;


