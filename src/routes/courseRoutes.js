const express = require('express');
const router = express.Router();
const accessibilityController = require('../controllers/accessibilityController');

// Certifique-se de que o controller esteja sendo importado corretamente
router.get('/data', accessibilityController.getAccessibilityData);

module.exports = router;


