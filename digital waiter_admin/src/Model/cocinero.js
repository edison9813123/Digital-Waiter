const cocinero = (sequelize, type)=>{
    return sequelize.define('cocinero', {
        id_cocinero:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        apellido: type.STRING,
        telefono: type.INTEGER(10),

        creacionCocinero: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCocinero:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = cocinero
