'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_of_student: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      mobile_no: {
        type: Sequelize.STRING(13)
      },
      age: {
        type: Sequelize.INTEGER
      },
      dob: {
        type: Sequelize.DATE
      },
      qualification: {
        type: Sequelize.STRING
      },
      additional_qualification: {
        type: Sequelize.STRING
      },
      refrence: {
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
    await queryInterface.dropTable('Registrations');
  }
};