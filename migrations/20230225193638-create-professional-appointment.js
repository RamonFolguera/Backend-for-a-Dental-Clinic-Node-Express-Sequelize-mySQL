'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProfessionalAppointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      professional_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"Professionals",
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
    await queryInterface.dropTable('ProfessionalAppointments');
  }
};