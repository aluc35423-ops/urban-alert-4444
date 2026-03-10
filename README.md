# URBAN-ALERT

## ¿Qué es UrbanAlert?
Urban-Alert es un Software para gestionar y centralizar reportes de incidentes urbanos. Permite a los usuarios registrarse, autenticarse de forma segura y crear reportes de emergencias. Además, cuenta con un sistema inteligente que clasifica automáticamente la prioridad del reporte (por ejemplo, asignando prioridad "Alta" si se detectan palabras como "fuego" o "incendio" en la descripción).

## Tecnologías Utilizadas
* **Node.js**: Entorno de ejecución para el backend.
* **Express**: Framework para la creación y manejo de rutas de la API.
* **MongoDB & Mongoose**: Base de datos NoSQL y modelado de datos para almacenar usuarios y reportes.
* **JWT (JSON Web Tokens)**: Para la autenticación segura y protección de rutas privadas.
* **Bcrypt**: Para el encriptado seguro de las contraseñas de los usuarios.

## Guía de Instalación

### 1. Instalar dependencias
Una vez que hayas clonado el repositorio, abre tu terminal en la carpeta del proyecto y ejecuta:
```bash
npm install express mongoose dotenv bcrypt jsonwebtoken
```
*¿Qué hace cada librería?*

* **express**: Levanta el servidor y maneja las rutas de la API.

* **mongoose**: Nos conecta con MongoDB y nos deja crear los modelos de datos.

* **dotenv**: Carga las variables de entorno desde el archivo .env para proteger datos sensibles.

* **bcrypt**: Se encarga de hashear (encriptar) las contraseñas de los usuarios para máxima seguridad.

* **jsonwebtoken**: Genera y verifica los tokens para proteger las rutas privadas.

### 2. Configuración de Variables de Entorno
Crea un archivo llamado .env en la raíz del proyecto. Aquí guardarás las credenciales sensibles. Agrega las siguientes variables con tu propia configuración:

```bash
PORT=3000
MONGO_URI='tu_cadena_de_conexion_de_mongodb'
SUPABASE_URL='tu_cadena_de_conexion_de_supabase'
SUPABASE_KEY='tu_llave_de_conexion_de_supabase'
JWT_SECRET=tu_palabra_secreta_super_segura
```

### 3. Iniciar el servidor
Para levantar la API en tu entorno local, ejecuta:
```bash
node index.js
```

Verás un mensaje en consola indicando que la conexión a MongoDB fue exitosa y el puerto en el que está corriendo.

## Main Endpoints
Todas las rutas base están configuradas bajo */api/reportes*.

### Autenticación (Rutas Públicas)
POST */api/reportes/register*: Crea un nuevo usuario en la base de datos encriptando su contraseña.

POST */api/reportes/login*: Valida las credenciales del usuario y devuelve un token JWT con vigencia de 1 hora.

### Reportes (Rutas Protegidas)

*Nota:* Se requiere enviar el JWT en los headers de la petición (Authorization: Bearer <tu_token>).

GET */api/reportes/getAllReports*: Obtiene la lista completa de todos los reportes generados.

POST */api/reportes/createReports*: Crea un nuevo reporte en el sistema (título, descripción, ubicación).