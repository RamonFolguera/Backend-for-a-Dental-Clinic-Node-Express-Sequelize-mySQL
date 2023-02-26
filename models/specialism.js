'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialism extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Specialism.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Specialism',
  });
  return Specialism;
};