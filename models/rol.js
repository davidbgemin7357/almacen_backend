import { DataTypes } from "sequelize";
import { conexion } from "../db/sequelize.js";

export default () => {
    return conexion.define(
        "rol",
        {
            rol_id: {
                type: DataTypes.INTEGER,
                field: "id",
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true,
            },
            rol_nombre: {
                type: DataTypes.STRING(25),
                field: "nombre"
            }
        },{
            tableName: "roles",
            timestamps: false,
        }
    )
}