const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/contact', (req, res) => {
    res.send('Contact page');
});

router.get('/offer', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/offer2023.html'));
});

router.get('/selftest', (req, res) => {
    res.send('Self Test');
});

router.get('/winUser', (req, res) => {
    res.send('Windows User Guide');
});

module.exports = router;
