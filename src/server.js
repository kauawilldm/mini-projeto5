




// // const express = require('express');
// // const app = express();
// // const PORT = 3000;

// // const courseRoutes = require('./routes/courseRoutes');
// // const accessibilityRoutes = require('./routes/accessibilityRoutes');
// // const digitalLiteracyRoutes = require('./routes/digitalLiteracyRoutes');

// // console.log('digitalLiteracyRoutes:', digitalLiteracyRoutes);

// // app.use('/api/courses', courseRoutes);
// // app.use('/api/accessibility', accessibilityRoutes);
// // app.use('/api/digital-literacy', digitalLiteracyRoutes);

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });




const express = require('express');
const app = express();
const PORT = 3000;

const courseRoutes = require('./routes/courseRoutes');
const accessibilityRoutes = require('./routes/accessibilityRoutes');
const digitalLiteracyRoutes = require('./routes/digitalLiteracyRoutes');

console.log('digitalLiteracyRoutes:', digitalLiteracyRoutes); 

app.use('/api/courses', courseRoutes);
app.use('/api/accessibility', accessibilityRoutes);
app.use('/api/digital-literacy', digitalLiteracyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
