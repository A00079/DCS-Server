"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Detail.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      contact: DataTypes.STRING(13),
      email: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      averageAnnualIncome: DataTypes.INTEGER,
      gender: {
        type: DataTypes.ENUM,
        values: ["Male", "Female", "Other"],
        defaultValue: "Male"
      },
      detailType: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Detail"
    }
  );
  return Detail;
};
