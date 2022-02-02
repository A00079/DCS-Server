'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Registration.init({
    name_of_student: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    email: DataTypes.STRING,
    mobile_no: DataTypes.STRING(13),
    age: DataTypes.INTEGER,
    dob: DataTypes.DATE,
    qualification: DataTypes.STRING,
    additional_qualification: DataTypes.STRING,
    refrence: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registration',
  });
  return Registration;
};