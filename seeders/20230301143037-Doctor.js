'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {id: 1,collegiate_num: 070706732, user_id:3},
      {id: 2,collegiate_num: 085514682, user_id:5},
      {id: 3,collegiate_num: 070124564, user_id:7}
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
