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
        const userId = req.userId
        const appointmentId = req.params.id;
        const { date } = req.body;
        console.log(req.userId)
        const updateAppointment = await Appointment.update(
            {date: date}, 

            {
                where: {
                    id: appointmentId,
                    user_id : userId,
                },
            });
            
        console.log(updateAppointment);
        return res.json(
            {
            success: true,
            message: "Appointment succesfully updated",
            data: updateAppointment
            });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Somenthing went wrong trying to update the appointment",
            error: error.message
        })
    }
}


appointmentController.deleteMyAppointment = async (req, res) => {
    try {
    
    const appointmentId = req.params.id;
    const userId=req.userId;
    const deleteAppointment = await Appointment.destroy(
        {
            where: 
            { 
                id: appointmentId,
                user_id : userId,
            }
        })
    
            return res.json(
                {
                    success: true,
                    message: "Appointment succesfully deleted",
                    data: deleteAppointment
                }
            );
        
    
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
        const appointment=await Appointment.findOne({where:{
            id:appointmentId,
            doctor_id: doctorId,
            confirmed:false
        }});
        if(appointment!==null){
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
                message: "Somenthing went wrong with your appointment",
                error: "Maybe it was validated yet?"
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