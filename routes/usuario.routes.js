import {Router} from "express";
import { login, registro } from "../controllers/usuario.controller.js";

export const router = Router();

router.post('/registro', registro)
router.post('/login', login)