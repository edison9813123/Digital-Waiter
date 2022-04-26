const menu = (sequelize, type)=>{
    return sequelize.define('menu', {
        id_menu:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        descripcion: type.STRING,
        imagen:type.INTEGER,
        

        creacionMenu: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionMenu:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = menu
