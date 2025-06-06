const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket.controller');

// Crear un nuevo ticket
router.post('/', ticketController.crearTicket);

// Obtener todos los tickets
router.get('/', ticketController.obtenerTickets);

// Obtener un ticket específico
router.get('/:id', ticketController.obtenerTicketPorId);

// Actualizar un ticket
router.put('/:id', ticketController.actualizarTicket);

// Eliminar un ticket
router.delete('/:id', ticketController.eliminarTicket);

module.exports = router; 