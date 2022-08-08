import { DataTypes } from "sequelize";
import { conexion } from "../db/sequelize.js";
import { hashSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken"


export default () => {
    let usuario = conexion.define("usuario", {
        usuario_id: {
            field: "id",
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        usuario_nombre: {
            field: "nombre",
            type: DataTypes.STRING(25),
        },
        usuario_correo: {
            field: "correo",
            type: DataTypes.STRING(25),
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        usuario_password: {
            field: "password",
            type: DataTypes.TEXT,
        },
    });

    // encriptación de la pass con bcrypt:
    usuario.prototype.setearPassword = function (password) {
        const hash = hashSync(password, 10);
        this.usuario_password = hash;
    };

    // compara la contraseña entrante con el hash guardado en la bd, si la constraseña es correcta retornará true, caso contrario false:
    usuario.prototype.validarPassword = function (password) {
        return compareSync(password, this.usuario_password);
    };

    // generacón del jwt:
    usuario.prototype.generarJWT = function() {
        // payload es la parte en la cual podemos agregar información adicional para que el front la pueda utilizar a su conveniencia (no se necesita descencriptar nada, no necesita contraseña):
        const payload = {
            usuarioId: this.usuarioId,
            usuarioCorreo: this.usuarioCorreo,
        }

        // luego indicamos la firma que va a servir para encriptar la JWT:
        return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "12h"})
    }

    return usuario;
};
