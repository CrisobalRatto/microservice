# Microservicio de Autenticación con JWT

## Resumen:
El repositorio `microservice` está dedicado a proporcionar un mecanismo de autenticación ligero, seguro y eficiente usando Tokens Web JSON (JWT). Diseñado para integrarse fácilmente en sistemas más grandes, este microservicio asegura que la autenticación de usuarios sea ágil y estandarizada.

## Características:
- **Registro de Usuarios**: Permite que nuevos usuarios se registren, almacenando de manera segura sus credenciales para futuras autenticaciones.
- **Endpoint de Inicio de Sesión**: Valida las credenciales del usuario y, tras una validación exitosa, emite un JWT para el usuario.
- **Verificación de Token**: Un endpoint que verifica la autenticidad y validez de un JWT proporcionado.

## Tecnologías Utilizadas:
- **Entorno de Ejecución**: Node.js
- **Base de Datos**: MongoDB
- **Token**: Tokens Web JSON (JWT)

