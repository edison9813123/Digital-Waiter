const cliente = (sequelize, type)=>{
    return sequelize.define('cliente', {
        id_cliente:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user: type.STRING(99),
        password: type.STRING,
        nombre: type.STRING,
        apellido: type.STRING,
        telefono: type.INTEGER(10),

        creacionCliente: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCliente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = cliente
