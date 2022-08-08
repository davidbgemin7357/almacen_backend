import categoria_model from "../models/categoria.js";
import estante_model from "../models/estante.js";
import rol_model from "../models/rol.js";
import usuario_model from "../models/usuario.js";
import producto_estante_model from "../models/producto_estante.js"
import producto_model from "../models/producto.js";

export const Categoria = categoria_model();
export const Estante = estante_model();
export const Rol = rol_model();
export const Usuario = usuario_model();
export const Producto_Estante = producto_estante_model();
export const Producto = producto_model();

// relacion de uno a munchos: categoria tiene muchos estantes:
// el modelo/tabla categoria es la tabla independiente:
Categoria.hasMany(Estante, {
    foreignKey: {
        // se crea la llave foránea en la tabla estante:
        name: "categoria_id",
        allowNull: false,
    },
});
// un estante PERTENECE A una categoría (estante es la tabla dependiente):
Estante.belongsTo(Categoria, {
    foreignKey: "categoria_id",
});




Rol.hasMany(Usuario, {
    foreignKey: {
        name: "roles_id",
        allowNull: false,
    },
});
Usuario.belongsTo(Rol, {
    foreignKey: "roles_id",
});


// Usuario.sync({force: true}); // se resetea solamente la tabla usuario


Estante.hasMany(Producto_Estante, {
    foreignKey: {
        name: "estantes_id",
        allowNull: false
    }
})
Producto_Estante.belongsTo(Estante,{
    foreignKey: {
        name: "estantes_id",
    }
})
Producto.hasMany(Producto_Estante, {
    foreignKey: {
        name: "productos_id",
        allowNull: false
    }
})
Producto_Estante.belongsTo(Producto, {
    foreignKey: {
        name: "productos_id",
    }
})