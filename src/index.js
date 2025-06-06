const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const ticketRoutes = require('./routes/ticket.routes');
app.use('/api/tickets', ticketRoutes);

// Sincronizar base de datos y iniciar servidor
const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
    try {
        // Sincronizar la base de datos usando alter en lugar de force
        await sequelize.sync({ alter: true });
        console.log('Base de datos sincronizada correctamente');
        
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

iniciarServidor(); 