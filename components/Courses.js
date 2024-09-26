import React, { useEffect, useState } from 'react';

const FreeCoursesComponent = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div>
      <h2>Free Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>Title:</strong> {course.titulo} - <strong>Platform:</strong> {course.plataforma}
            <br />
            <a href={course.link} target="_blank" rel="noopener noreferrer">Go to Course</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreeCoursesComponent;
