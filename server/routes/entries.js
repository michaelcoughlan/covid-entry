const express = require('express');
const router = express.Router();
const entriesController = require('../controllers').entries;

router.post('/', entriesController.createEntry);

module.exports = router;
