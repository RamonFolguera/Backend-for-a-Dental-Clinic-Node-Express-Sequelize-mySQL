const { User, Doctor, Service, Appointment } = require("../models")


const appointmentController = {};




appointmentController.createAppointments = async (req, res) => {
    
    try {
        const { doctor_id, service_id, comments } = req.body;
        const user_id = req.userId
        const newAppointment = {
            service_id: service_id,
            user_id: user_id,
            doctor_id: doctor_id,
            comments: comments
        }
    
        // Guardar la informacion
        const appointment = await Appointment.create(newAppointment)
        return res.json(
            {
            success: true,
            message: "Appointment succesfully created",
            data: appointment
            });

    } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Somenthing went wrong with your appointment",
                error: error.message
            })
    }
}

appointmentController.getAppointmentsById = async (req, res) => {
    
    try {
        const getAppointmentsById = await User.findByPk(
            req.userId,
            { 
                include: [
                    {
                    model: Service,
                    through: {
                        attributes: ["doctor_id", "user_id", "createdAt"],
                    }
                    
                },
            ]
            }
        )
        return res.json(
            {
            success: true,
            message: "Appointment succesfully retrieved",
            data: getAppointmentsById
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get the appointment by Id",
            error: error.message
        })
    }
}

module.exports = appointmentController;