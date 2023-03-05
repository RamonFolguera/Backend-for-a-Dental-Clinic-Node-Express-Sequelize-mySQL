const jwt = require('jsonwebtoken');
const { Appointment } = require("../models");

const verifyAppointmentChanges = async(req, res, next) => {

    try {
        const appointmentId= req.body.id;
        const appointment = await Appointment.findByPk(appointmentId);
        const changes= req.body.changes;
        if(appointment && changes){
            let changesExists = true;
            let wrongAttribute;
            for( let i in changes){
                if(!appointment._isAttribute(i)){
                    changesExists=false;
                    wrongAttribute=i;
                    break;
                }
            }
            if(changesExists){
                req.Appointment=appointment;
                next();
            }else{
                return res.status(500).send("wrong attribute sent "+ wrongAttribute+ ", must be replaced by correct attribute");
            }
        }else{
            return res.status(500).send("You must send any correct changes to update appointment");
        }
    }catch(error){
        return res.status(500).send(error.message);
    }
}

module.exports = verifyAppointmentChanges;