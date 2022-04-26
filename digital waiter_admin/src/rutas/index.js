const express = require('express');
const router = express.Router();

router.get('/portada', (req,res)=>{
    res.render('paginas/portada');

});
router.get('/organizador', (req,res)=>{
    res.render('paginas/organizador');
});
router.get('/evento', (req,res)=>{
    res.render('paginas/evento');
});
router.get('/principal', (req,res)=>{
    res.render('paginas/principal');
});

module.exports = router;