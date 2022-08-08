import { DataTypes } from "sequelize";
import {conexion} from "../db/sequelize.js";

export default () => {
    // opciones para poner a las columnas: https://sequelize.org/docs/v6/core-concepts/model-basics/#column-options
    return conexion.define(
        "producto",
        {
            producto_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
                field: "id"
            },
            producto_nombre: {
                type: DataTypes.STRING(45),
                field: "nombre",
            },
            producto_precio: {
                type: DataTypes.DECIMAL(5,2),
                field: "precio"
            }
        }, {
            tableName: "productos",
            timestamps: true,
            createdAt: "fecha_creacion",
            updatedAt: "ultima_modificacion"
        }
    )
}