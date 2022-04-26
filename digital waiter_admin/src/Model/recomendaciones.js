const recomendaciones = (sequelize, type)=>{
    return sequelize.define('recomendaciones', {
        id_recomendaciones:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comentario: type.STRING,
        calificacion: type.STRING,
        

        creacionRecomendaciones: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRecomendaciones:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = recomendaciones
