import { Categoria } from "../db/relaciones.js";

export const crearCategoria = async (req, res) => {
    try {
        const { categoria_nombre } = req.body;
        const coincidencia = await Categoria.findOne({
            where: {
                categoria_nombre,
            },
        });
        if (coincidencia) {
            return res.status(400).json({
                success: false,
                content: null,
                messga: "La categoría ya existe",
            });
        }
        const nuevaCategoria = await Categoria.create(req.body);
        return res.status(201).json({
            success: true,
            content: nuevaCategoria,
            message: "categoría creada exitosamente",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al agregar categoría",
        });
    }
};

export const obtenerCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findAll();
        return res.status(200).json(categoria)
    } catch (error) {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error obtener las categorias",
        });
    }
};
