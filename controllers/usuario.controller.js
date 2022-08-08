import { Usuario } from "../db/relaciones.js";

export const registro = async (req, res) => {
    try {
        const { usuario_correo, password, id } = req.body;
        const coincidencia = await Usuario.findOne({
            where: {
                usuario_correo,
            },
        }); 
        if (!coincidencia) {
            const nuevoUsuario = Usuario.build(req.body);
            nuevoUsuario.setearPassword(password);
            await nuevoUsuario.save();
            return res
                .json({
                    success: true,
                    content: nuevoUsuario,
                    message: "usuario creado exitosamente",
                })
                .status(201);
        } else {
            return res.json({ msg: "El usuario ya existe" });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al crear el usuario",
        });
    }
};


export const login = async (req, res) => {
    const { usuario_correo, password } = req.body;
    // ver si hay un usuario con ese correo:
    try {
        const usuarioEncontrado = await Usuario.findOne({
            where: {
                usuario_correo,
            },
        });
        if (!usuarioEncontrado) {
            return res.status(404).json({
                success: false,
                content: null,
                message: "Usuario no encontrado",
            });
        }

        const resultado = usuarioEncontrado.validarPassword(password);
        if (resultado) {
            return res.json({
                success: true,
                content: usuarioEncontrado.generarJWT(),
                message: "Bienvenido",
            });
        } else {
            return res.status(400).json({
                success: false,
                content: null,
                message: "Contraseña incorrecta",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al hacer el login",
        });
    }
};