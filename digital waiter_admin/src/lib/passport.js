const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
/*const orm = ('../database/database.orm');
const pool = ('../database/database.sql');
const helpers = ('../lib/helpers');

passport.use(
  'local.signup',
  new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
  },
    async (req, user, password, done) => {
      console.log(req.body);
      const { nombre,apellido,telefono } = req.body;
      const newUser = {
        user,
        password,
        nombre,
        apellido,
        telefono
      };
      newUser.password = await helpers.encryptPassword(password);
      const result = await pool.query('INSERT INTO cliente SET ?', newUser);
      newUser.id = result.insertId;
      return done(null,newUser);
    }
  )
);
passport.serializeUser((user,done)=>{
  done(null,user.id);
}); */


