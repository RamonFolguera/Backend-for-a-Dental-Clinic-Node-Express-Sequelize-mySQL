const doctorController = {};

doctorController.getDoctors = (req, res) => {return res.send('Get Doctors')};
doctorController.createDoctors = (req, res) => {return res.send('Create Doctors')};

module.exports = doctorController;