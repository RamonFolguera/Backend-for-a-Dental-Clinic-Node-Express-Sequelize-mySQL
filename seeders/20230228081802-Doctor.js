'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Doctors', [
      {id: 1,collegiate_num: 70706732, user_id:1, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 2,collegiate_num: 85514682, user_id:3, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"}
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
