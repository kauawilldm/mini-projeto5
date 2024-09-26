

const courses = [
  { id: 1, name: 'Curso de Programação', description: 'Aprenda a programar do zero.' },
  { id: 2, name: 'Curso de Design', description: 'Aprenda design gráfico.' },
  // Adicione mais cursos conforme necessário
];

const getCourses = (req, res) => {
  res.json(courses);
};

module.exports = { getCourses };


