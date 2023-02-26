'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AppointmentTreatments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      treatment_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"Treatments",
          Key:"id"
        }
      },
      appointment_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"Appointments",
          Key:"id"
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AppointmentTreatments');
  }
};