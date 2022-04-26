const localidad = (sequelize, type)=>{
    return sequelize.define('localidad', {
        id_localidad:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_lugar: type.STRING,
        descripcion: type.STRING,

        creacionLocalidad: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionLocalidad:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = localidad
