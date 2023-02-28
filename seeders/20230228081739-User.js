'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    */
    // await queryInterface.bulkInsert('Users', [
    //   {id: 1,name: "Alyna", first_surname:"asdf", second_surname:"qwer",phone:"666555444",emai:"alyna@alyna.com",address:"su casa", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    //   {id: 2,name: "Ignacio", email: "ignacio@gmail.com", password: "333222111", RolId: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    //   {id: 3,name: "Marcos", email: "marcos@gmail.com", password: "888777555", RolId: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    //   {id: 4,name: "Eduardo", email: "eduardo@gmail.com", password: "54325435243", RolId: 2, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
    // ],{});
    
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
