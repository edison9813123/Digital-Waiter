const express = require('express');
const router = express.Router();
const passport = require('passport');
//const pool = require('../config/database');


//ruta de login
router.get('/login', (req,res) => {
    res.render('authentication/login');
});
router.post('/signup',passport.authenticate('local.signup',{
    successRedirect:'/login',
    failureRedirect:'/login',
    failureFlash:true
}))

/*router.post('/user', async (req,res) => {
   const { name, email, description }= req.body;
   const newUser = {
    name,
    email,
    description
   };
   await pool.query('INSERT INTO users set ?', [newUser])
    res.send('receive');
});*/
module.exports = router;