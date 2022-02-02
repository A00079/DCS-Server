"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Details", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING(13)
      },
      email: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      averageAnnualIncome: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.ENUM,
        values: ["Male", "Female", "Other"],
        defaultValue: "Male"
      },
      detailType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Details");
  }
};
