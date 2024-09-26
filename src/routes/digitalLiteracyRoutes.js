
const express = require('express');
const router = express.Router();
const digitalLiteracyController = require('../controllers/digitalLiteracyController'); 

router.get('/tips', digitalLiteracyController.getDigitalLiteracyTips);

module.exports = router;

