const evento = (sequelize, type)=>{
    return sequelize.define('evento', {
        id_evento:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        descripcion: type.STRING,
        fecha: type.DATE,
        hora: type.TIME,
        direccion: type.STRING,
        precio: type.FLOAT(6.2),

        creacionEmpleados: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionEmpleados:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = evento
