'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfessionalSpecialism extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProfessionalSpecialism.init({
    professional_id: DataTypes.INTEGER,
    specialism_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProfessionalSpecialism',
  });
  return ProfessionalSpecialism;
};