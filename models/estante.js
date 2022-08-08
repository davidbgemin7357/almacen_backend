import { DataTypes } from "sequelize";
import { conexion } from "../db/sequelize.js";

export default () => {
    return conexion.define(
        "estante",
        {
            estante_id: {
                type: DataTypes.INTEGER,
                field: "id",
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,
            },
            estante_name: {
                type: DataTypes.STRING(45),
                field: "name",
            },
        },
        {
            tableName: "estantes",
            timestamps: true,
        }
    );
};
