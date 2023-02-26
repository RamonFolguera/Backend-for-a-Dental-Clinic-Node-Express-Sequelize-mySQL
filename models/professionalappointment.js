'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalAppointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionalAppointment.init({
    professional_id: DataTypes.INTEGER,
    appointment_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProfessionalAppointment',
  });
  return ProfessionalAppointment;
};