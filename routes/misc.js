const express = require('express');
const router = express.Router();

router.get('/pointlessGame', (req, res) => {
    res.render('WebpageVideogame');
});

router.get('/linear', (req, res) => {
    res.render('lineales');
});

router.get('/quadratic', (req, res) => {
    res.render('cuadraticas');
});

router.get('/flappy', (req, res) => {
    res.render('flappy');
});

module.exports = router;