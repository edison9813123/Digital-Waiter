const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "digitalwaiter";

mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
}).then(connection => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
    console.info("Base de datos creada o comprobada correctamente");
  })
})

// exportacion de modelos

const userModel = require('../Model/user');

const rolModel = require('../Model/rol');

const eventoModel = require('../Model/evento');

const recomendacionesModel = require('../Model/recomendaciones');

const organizadorModel = require('../Model/organizador');

const cocineroModel = require('../Model/cocinero');

const clienteModel = require('../Model/cliente');

const localidadModel = require('../Model/localidad');

const artistasModel = require('../Model/artistas');

const empleadosModel = require('../Model/empleados');

const menuModel = require('../Model/menu');


const sequelize = new Sequelize(
  'digitalwaiter',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })

  // sincroniza las tablas
const user = userModel(sequelize, Sequelize);

const rol = rolModel(sequelize, Sequelize);

const evento = eventoModel(sequelize, Sequelize);

const recomendaciones = recomendacionesModel(sequelize, Sequelize);

const organizador = organizadorModel(sequelize, Sequelize);

const cocinero = cocineroModel(sequelize, Sequelize);

const cliente = clienteModel(sequelize, Sequelize);

const localidad = localidadModel(sequelize, Sequelize);

const artistas = artistasModel(sequelize, Sequelize);

const empleados = empleadosModel(sequelize, Sequelize);

const menu = menuModel(sequelize, Sequelize);


//Relaciones

user.hasMany(rol)
rol.belongsTo(user)

evento.hasMany(recomendaciones)
recomendaciones.belongsTo(evento)

organizador.hasMany(evento)
evento.belongsTo(organizador)

cocinero.hasMany(evento)
evento.belongsTo(cocinero)

cliente.hasMany(evento)
evento.belongsTo(cliente)

localidad.hasMany(evento)
evento.belongsTo(localidad)

artistas.hasMany(evento)
evento.belongsTo(artistas)

cocinero.hasMany(empleados)
empleados.belongsTo(cocinero)

menu.hasMany(cocinero)
cocinero.belongsTo(menu)

artistas.hasMany(empleados)
empleados.belongsTo(artistas)

cliente.hasMany(rol)
rol.belongsTo(cliente)

module.exports = {

  user,
  rol,
  evento,
  recomendaciones,
  organizador,
  cocinero,
  cliente,
  localidad,
  artistas,
  empleados,
  menu,

}
