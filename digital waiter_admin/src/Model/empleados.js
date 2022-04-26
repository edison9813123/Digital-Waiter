const empleados = (sequelize, type)=>{
    return sequelize.define('empleados', {
        id_empleados:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_empleado: type.STRING,
        descripcion: type.STRING,
        telefono: type.INTEGER(10),

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

module.exports = empleados
