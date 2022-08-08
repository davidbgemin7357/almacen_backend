import {Producto} from "../db/relaciones.js"

export const obtenerProductos = async(req, res) => {
    try {
        const productos = await Producto.findAll()
        return res.json({
            success: true,
            content: productos,
            message: null
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error al listar los productos"
        })
    }
}

export const crearProducto = async(req, res) => {
    // cuando creamos un nuevo registro, este retornará el registro creado en la bd
    // en sequelize hay dos formas de crear un nuevo registro y es:
    // 1. await Modelo.create(data) => va a crear el nuevo registro en la bs y retornará su data creada
    // 2. Modelo.build() => todavía no crea el registro en la bd, hace la validación de que todos los campos de cumplan, va de la mano con .save() este si retorna una promesa y esto se usa para hacer una preconfiguración de los campos antes de guardarlos en la bd:
    try {
        // validación:
        // regex...
        // expresión regular para solamente texto mayus, minus y espacios:
        const validacion = new RegExp(/^[a-zA-Z ]+$/);
        if (validacion.test(req.body.producto_nombre)) {
            const nuevoProducto = await Producto.create(req.body);
            res.status(201).json({
                success: true,
                content: nuevoProducto,
                message: "Producto creado exitosamente",
            });
        } else {
            return res.status(400).json({
                success: false,
                content: null,
                message: "Nombre de producto incorrecto"
            })
        }
    } catch (error) {
        console.log(error)
        // return res.status(500).json({
        //     msg: "Error al listar los productos"
        // })
    }
}