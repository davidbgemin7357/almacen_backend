import { Sequelize } from "sequelize";

export const conexion = new Sequelize(
    process.env.DB_NAME, // db name
    process.env.DB_USER, // db user
    process.env.DB_PASSWORD, // password
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        timezone: "-05:05",
        dialectOptions: {
            dateStrings: true,
        },
        logging: false
    }
)