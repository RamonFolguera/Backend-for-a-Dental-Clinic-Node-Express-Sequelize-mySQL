const { Doctor } = require("../models");

const isDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.findOne({
        where: { user_id: req.userId },
    });

    if (!doctor) {
        return res.status(500).json({
        success: true,
        message: "You don't have permissions.",
        });
    }

    if (req.roleId === 3) {
        req.doctorId= doctor.id;
        next();
    }
} catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};

module.exports = isDoctor;