import {Router} from "express"
import {obtenerProductos, crearProducto} from "../controllers/producto.controller.js"

export const router = Router();

router.get('/', obtenerProductos)
router.post('/', crearProducto)