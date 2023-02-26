'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProfessionalSpecialisms', {
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
      specialism_id: {
        type: Sequelize.INTEGER,
        references: {
          model:"Specialisms",
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
    await queryInterface.dropTable('ProfessionalSpecialisms');
  }
};