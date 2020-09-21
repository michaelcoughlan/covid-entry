const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    if (!req.body.email || !req.body.name || !req.body.phoneNumber) {
        return res.status(400).json({ error: 'Bad request, missing fields.' });
    }

    res.send('Thanks!')
});

module.exports = router;
