# API Mesa de Ayuda (Helpdesk API)

Esta es una API REST para un sistema de mesa de ayuda que permite la gestión de tickets usando MySQL como base de datos.

## Requisitos

- Node.js
- MySQL
- Postman (para pruebas)

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```
3. Crear una base de datos MySQL llamada 'helpdesk'
4. Crear archivo `.env` en la raíz del proyecto con el siguiente contenido:
```
DB_NAME=helpdesk
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
PORT=3000
```

## Ejecución

Para desarrollo:
```bash
npm run dev
```

Para producción:
```bash
npm start
```

## Endpoints

### Tickets

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | /api/tickets | Crear nuevo ticket |
| GET | /api/tickets | Obtener todos los tickets |
| GET | /api/tickets/:id | Obtener ticket por ID |
| PUT | /api/tickets/:id | Actualizar ticket |
| DELETE | /api/tickets/:id | Eliminar ticket |

## Ejemplo de uso en Postman

### Crear Ticket
```
POST http://localhost:3000/api/tickets
Content-Type: application/json

{
    "titulo": "Error en sistema",
    "descripcion": "No puedo acceder al módulo de reportes",
    "categoria": "Sistema",
    "prioridad": "Alta",
    "solicitante": {
        "nombre": "Juan Pérez",
        "email": "juan@ejemplo.com",
        "departamento": "Ventas"
    }
}
```

### Actualizar Ticket
```
PUT http://localhost:3000/api/tickets/:id
Content-Type: application/json

{
    "estado": "En Proceso",
    "descripcion": "No puedo acceder al módulo de reportes - En revisión"
}
```

## Estructura de la Base de Datos

La tabla `tickets` contiene los siguientes campos:

- id (INT, auto-incrementable, primary key)
- titulo (VARCHAR)
- descripcion (TEXT)
- estado (ENUM: 'Abierto', 'En Proceso', 'Cerrado')
- prioridad (ENUM: 'Baja', 'Media', 'Alta')
- categoria (VARCHAR)
- solicitante_nombre (VARCHAR)
- solicitante_email (VARCHAR)
- solicitante_departamento (VARCHAR)
- fechaCreacion (DATETIME)
- fechaActualizacion (DATETIME) 