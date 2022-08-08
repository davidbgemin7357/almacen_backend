# Backend básico en: NODE, EXPRESS, MYSQL
### token (jwt) (Sin rutas protegidas)
### Tablas:
### categoria, estante, producto_estante, rol, usuario

### controladores
### categoria   : crear, obtener   
### producto    : crear, obtener
### usuario     : registrar, login (JWT)
### 
### I. Crear la base de datos:
### II. Crear en la tabla roles: id=1, nombre="admin"

Registrar usuario:
http://localhost:8000/api/usuarios/registro
\
`{
    "usuario_correo":"davidbgemin@gmail.com",
    "password":"123456",
    "roles_id": 1
}`

Login usuario:
\
http://localhost:8000/api/usuarios/login
\
`{
    "usuario_correo":"mail@gmail.com",
    "password":"123456"
}`

Registrar/Obtener Categoria:
\
http://localhost:8000/api/categorias
\
`{
    "categoria_nombre":"limpieza"
}`

Registrar/Obtener Productos:
\
http://localhost:8000/api/productos
\
`{
    "producto_nombre":"mesa",
    "producto_precio": 13.5
}`