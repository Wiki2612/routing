const express = require('express');
const router = express.Router();

router.get('/selftest', (req, res) => {
    res.send('This is a self-test service');
});

module.exports = router;
