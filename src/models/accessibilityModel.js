
  

const express = require('express');
const router = express.Router();
const accessibilityController = require('../controllers/accessibilityController');

router.get('/data', accessibilityController.getAccessibilityData);

module.exports = router;
