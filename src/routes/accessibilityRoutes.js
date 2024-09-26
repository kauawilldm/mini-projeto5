
//const express = require('express');
//const router = express.Router();
//const { getAccessibilityInfo } = require('../controllers/accessibilityController');

//router.get('/', getAccessibilityInfo);

//module.exports = router;
/////////////


const express = require('express');
const router = express.Router();
const accessibilityController = require('../controllers/accessibilityController');

// Certifique-se de que o controller esteja sendo importado corretamente
router.get('/data', accessibilityController.getAccessibilityData);

module.exports = router;

