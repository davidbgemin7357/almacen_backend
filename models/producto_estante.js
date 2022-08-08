import { DataTypes } from "sequelize";
import { conexion } from "../db/sequelize.js";

export default () => {
    return conexion.define(
        "producto_estante",
        {
            producto_estante_id: {
                field: "id",
                type: DataTypes.INTEGER,
                unique: true,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            producto_estante_unidad: {
                field: "unidad",
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: "productos_estantes",
            timestamps: false,
        }
    );
};
