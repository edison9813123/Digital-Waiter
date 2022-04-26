const artistas = (sequelize, type)=>{
    return sequelize.define('artistas', {
        id_artistas:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_artista: type.STRING,
        descripcion: type.STRING,
        telefono: type.INTEGER(10), 

        creacionArtistas: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionArtistas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = artistas 
