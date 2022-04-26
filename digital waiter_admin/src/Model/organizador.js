const organizador = (sequelize, type)=>{
    return sequelize.define('organizador', {
        id_organizador:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        apellido: type.STRING,
        telefono: type.INTEGER(10),
        descripcion: type.STRING,

        creacionOrganizador: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionOrganizador:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = organizador
