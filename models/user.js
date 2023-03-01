'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(
        models.Role,
        {
      }),
      User.belongsToMany(
        models.Service,
        {
          through: 'Appointment',
          foreignKey: 'user_id'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    first_surname: DataTypes.STRING,
    second_surname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};