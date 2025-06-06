const Ticket = require('../models/ticket.model');

// Crear un nuevo ticket
exports.crearTicket = async (req, res) => {
    try {
        const { titulo, descripcion, categoria, prioridad, solicitante } = req.body;
        const ticket = await Ticket.create({
            titulo,
            descripcion,
            categoria,
            prioridad,
            solicitante_nombre: solicitante.nombre,
            solicitante_email: solicitante.email,
            solicitante_departamento: solicitante.departamento
        });
        res.status(201).json(ticket);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Obtener todos los tickets
exports.obtenerTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener un ticket por ID
exports.obtenerTicketPorId = async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id);
        if (!ticket) {
            return res.status(404).json({ mensaje: 'Ticket no encontrado' });
        }
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Actualizar un ticket
exports.actualizarTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id);
        if (!ticket) {
            return res.status(404).json({ mensaje: 'Ticket no encontrado' });
        }

        // Si hay información del solicitante, la procesamos
        if (req.body.solicitante) {
            req.body.solicitante_nombre = req.body.solicitante.nombre;
            req.body.solicitante_email = req.body.solicitante.email;
            req.body.solicitante_departamento = req.body.solicitante.departamento;
            delete req.body.solicitante;
        }

        await ticket.update(req.body);
        const ticketActualizado = await Ticket.findByPk(req.params.id);
        res.status(200).json(ticketActualizado);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar un ticket
exports.eliminarTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id);
        if (!ticket) {
            return res.status(404).json({ mensaje: 'Ticket no encontrado' });
        }
        await ticket.destroy();
        res.status(200).json({ mensaje: 'Ticket eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}; 