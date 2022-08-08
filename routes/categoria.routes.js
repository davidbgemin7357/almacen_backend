import {Router} from "express";
import {crearCategoria, obtenerCategoria} from "../controllers/categoria.controller.js"

export const router = Router();

router.get('/', obtenerCategoria)
router.post('/', crearCategoria)