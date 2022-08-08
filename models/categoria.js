import { DataTypes } from "sequelize";
import { conexion } from "../db/sequelize.js";

export default () => {
    return conexion.define(
        "categoria",
        {
            categoria_id: {
                type: DataTypes.INTEGER,
                field: "id",
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,
            },
            categoria_nombre: {
                type: DataTypes.STRING(45),
                field: "name",
            },
        },
        {
            tableName: "categorias",
            timestamps: false,
        }
    );
};
