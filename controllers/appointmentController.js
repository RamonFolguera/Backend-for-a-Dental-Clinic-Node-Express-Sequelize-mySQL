const { User, Doctor, Service, Appointment } = require("../models")
const bcrypt = require('bcrypt');



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

appointmentController.getAppointmentsByuserId = async (req, res) => {
    
    try {

        const getAppointmentsByUserId = await Appointment.findAll(
            {
                where:{
                user_id : req.userId
            },
            
                include: [
                    {
                        model: Service,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                    },
                    
        
                    {
                    model: Doctor,
                        attributes: {
                            exclude: ["collegiate_num", "user_id", "createdAt", "updatedAt"],
                    },
                    include: {
                        model:User,
                        attributes: {
                            exclude: ["password", "role_id", "createdAt","updatedAt",  "address"]
                        }
                    } 
                }
            ],
            //We exclude comments as it is only for doctors 
                    attributes: {
                        exclude: ["user_id", "doctor_id", "service_id", "comments", "createdAt","updatedAt"],
                }
            }
            
        )
        console.log(getAppointmentsByUserId);
        return res.json(
            {
            success: true,
            message: "Appointment succesfully retrieved",
            data: getAppointmentsByUserId
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get the appointment by Id",
            error: error.message
        })
    }
}

appointmentController.getAllAppointmentsAsDoctor = async (req, res) => {
    try {

        const getAllAppointmentsAsDoctor = await Appointment.findAll(

            {
            //     where:{
            //     user_id : req.userId,
                
            // },
                include: [
                    {
                        model: Service,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                    },
                    
                    {
                        model: User,
                        attributes: {
                            exclude: ["password", "role_id", "createdAt", "updatedAt"]
                        }
                    },
                    {
                    model: Doctor,
                        attributes: {
                            exclude: ["collegiate_num", "user_id", "createdAt", "updatedAt"],
                    },
                    include: {
                        model:User,
                        attributes: {
                            exclude: ["password", "role_id", "createdAt","updatedAt",  "address"]
                        }
                    } 
                }
            ],
            //We exclude comments as it is only for doctors 
                    attributes: {
                        exclude: ["user_id", "doctor_id", "service_id", "comments", "createdAt","updatedAt"],
                }
            }
            
        )

        return res.json(
            {
            success: true,
            message: "All Appointments succesfully retrieved as user doctor",
            data: getAllAppointmentsAsDoctor
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get all appointments as user doctor",
            error: error.message
        })
    }
}


module.exports = appointmentController;