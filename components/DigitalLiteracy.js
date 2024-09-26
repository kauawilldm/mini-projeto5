import React, { useEffect, useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses/free')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Erro ao buscar cursos:', error));
  }, []);

  return (
    <div>
      <h2>Cursos Gratuitos</h2>
      <ul>
        {courses.map(course => (
          <li key={course.titulo}>
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              {course.titulo}
            </a> - {course.plataforma}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
