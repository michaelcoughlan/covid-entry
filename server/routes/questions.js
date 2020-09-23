const express = require('express');
const router = express.Router();
const questionsController = require('../controllers').questions;

router.get('/', questionsController.getQuestions);
router.post('/', questionsController.createQuestion);

module.exports = router;
