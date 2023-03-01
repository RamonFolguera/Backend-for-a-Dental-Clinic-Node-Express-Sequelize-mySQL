'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Service.belongsToMany(
        models.User,
        {
          through: 'Appointments',
          foreignKey: 'service_id'
      }),
      Service.belongsToMany(
        models.Doctor,
        {
          through: 'Appointments',
          foreignKey: 'service_id'
      })
    }
  }
  Service.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    medication: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};