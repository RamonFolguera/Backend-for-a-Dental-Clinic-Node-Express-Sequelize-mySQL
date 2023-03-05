const { User } = require("../models");

const isAdmin = async (req, res, next) => {
    try {
        const admin = await User.findOne({
        where: { role_id: req.roleId },
    });

    if (!admin) {
        return res.status(500).json({
        success: true,
        message: "You don't have permissions.",
        });
    }

    if (req.roleId === 2) {
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

module.exports = isAdmin;