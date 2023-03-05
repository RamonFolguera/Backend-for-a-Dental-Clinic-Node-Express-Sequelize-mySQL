const { User, Doctor, Service, Appointment } = require("../models")
const bcrypt = require('bcrypt');

const appointmentController = {};

appointmentController.createAppointments = async (req, res) => {
    
    try {
        const { date, doctor_id, service_id } = req.body;
        const user_id = req.userId
        const newAppointment = {
            date: date,
            service_id: service_id,
            user_id: user_id,
            doctor_id: doctor_id,
            comments: "comments pending",
            confirmed: false
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
                    attributes: {
                        exclude: ["user_id", "doctor_id", "service_id", "createdAt","updatedAt"],
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

appointmentController.getAllAppointmentsAsAdmin = async (req, res) => {
    try {

        const getAllAppointmentsAsAdmin = await Appointment.findAll(

            {
                include: [
                    {
                        model: Service
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ["password"]
                        }
                    },
                    {
                    model: Doctor,
                        
                    include: {
                        model:User,
                        attributes: {
                            exclude: ["password"]
                        }
                    } 
                }
            ],
                    
            }
            
        )

        return res.json(
            {
            success: true,
            message: "All Appointments succesfully retrieved as user admin",
            data: getAllAppointmentsAsAdmin
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get all appointments as user admin",
            error: error.message
        })
    }
}

appointmentController.updateMyAppointment = async (req, res) => {
    
    try {
        const appointment = req.Appointment;
        const userId= req.userId;
        const changes = req.body.changes;
        changes.confirmed=false;
        if(appointment.user_id===userId){   // si la cita es tuya podras modificarla
            appointment.update(changes);
            appointment.save();
            return res.json(
                {
                    success: true,
                    message: "appointment updated",
                    data: appointment
                }
            );
        }else{
            return res.status(500).json({
                success: false,
                message: "You are not allowed to change this appointment"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong with your appointment",
            error: error.message
        })
    }
}

appointmentController.deleteMyAppointment = async (req, res) => {
    try {
    const appointmentId=req.body.id;
    const userId=req.userId;
    const appointment= await Appointment.findByPk(appointmentId);
    if(appointment){
        if(appointment.user_id===userId){  // if the appointment is yours
            appointment.destroy();
            return res.json(
                {
                    success: true,
                    message: "Appointment succesfully deleted",
                    data: appointment
                }
            );
        }else{
            return res.status(500).json({
                success: false,
                message: "Appointment selected doesn't exist or you don't have privileges to do that.",
                error: error.message
            })
        }
    }
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Something went wrong trying to delete your appointment",
            error: error.message
        })
    }
    
}

appointmentController.getMyAppointmentsAsDoctor = async (req, res) => {
    try {
        const doctorId= req.doctorId;
        const appointments = await Appointment.findAll(
            {
                where: {
                    doctor_id: doctorId
                },
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
                    attributes: {
                        exclude: ["user_id", "doctor_id", "service_id", "createdAt","updatedAt"],
                }
            }
            
        )

        return res.json(
            {
            success: true,
            message: "My appointments as Doctor sucessfully retieved",
            data: appointments
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get all appointments as user doctor",
            error: error.message
        })
    }
}

appointmentController.getMyPendingAppointmentsAsDoctor = async (req, res) => {
    try {
        const doctorId= req.doctorId;
        const getMyPendingAppointmentsAsDoctor = await Appointment.findAll(

            { where: {
                doctor_id: doctorId,
                confirmed: false
            },
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
                    attributes: {
                        exclude: ["user_id", "doctor_id", "service_id", "createdAt","updatedAt"],
                }
            }
            
        )

        return res.json(
            {
            success: true,
            message: "All Pending Appointments succesfully retrieved as user doctor",
            data: getMyPendingAppointmentsAsDoctor
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to get all appointments as user doctor",
            error: error.message
        })
    }

}

appointmentController.verify = async (req, res) => {
    
    try {
        const appointmentId = req.body.id;
        const doctorId= req.doctorId;
        const changes = {};
        changes.confirmed=true;
        changes.comments= req.body.comments;
        const appointment=await Appointment.findByPk(appointmentId);
        if(appointment.doctor_id===doctorId){   
            if(appointment.verified===true){
                appointment.update(changes);
                appointment.save();
                return res.json(
                    {
                        success: true,
                        message: "Appointment succesfully verified",
                        data: appointment
                    }
                );
            }else{
                return res.status(500).json({
                    success: false,
                    message: "This appointments is already verified"
                })
            }
        }else{
            return res.status(500).json({
                success: false,
                message: "You are not allowed to change this appointment"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong with your appointment",
            error: error.message
        })
    }
}

module.exports = appointmentController;