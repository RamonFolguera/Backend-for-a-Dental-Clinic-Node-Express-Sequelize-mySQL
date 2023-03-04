'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointment.belongsTo(
        models.User,
        {
          foreignKey: 'user_id'
      }),

      Appointment.belongsTo(
        models.Doctor,
        {
          foreignKey: 'doctor_id'
      }),
      
      Appointment.belongsTo(
        models.Service,
        {
          foreignKey: 'service_id'
      });
    }
  }
  Appointment.init({
    date: DataTypes.DATE,
    service_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};