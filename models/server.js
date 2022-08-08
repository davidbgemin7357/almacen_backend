import express from "express";
import cors from "cors";
import { conexion } from "../db/sequelize.js";

// import para la creación de las tablas:
// import * as prueba from '../db/relaciones.js'

import { router as catogoria_router } from "../routes/categoria.routes.js";
import { router as usuarios_router } from "../routes/usuario.routes.js";
import { router as productos_router } from "../routes/productos.routes.js";

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        this.paths = {
            categorias: "/api/categorias",
            estantes: "/api/estantes",
            usuarios: "/api/usuarios",
            producto: "/api/productos",
        };

        this.connectDB();

        this.middlewares();

        this.router();
    }

    // conexion a bd
    async connectDB() {
        try {
            await conexion.sync({
                // force: true
            });
            console.log("Base de datos sincronizada correctamente");
        } catch (error) {
            console.log(error);
        }
    }

    // middlewares:
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    // rutas:
    router() {
        this.app.use(this.paths.categorias, catogoria_router);
        this.app.use(this.paths.usuarios, usuarios_router);
        this.app.use(this.paths.producto, productos_router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        });
    }
}
