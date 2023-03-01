'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {id: 1,name: "Ramón", first_surname:"Folguera", second_surname:"Carbonell",phone:"666555444",email:"ramon@ramon.com",address:"Calle sin nombre, 17",role_id:1, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 2,name: "Jose Andrés", first_surname:"Oliver", second_surname:"Abel",phone:"665544332",email:"jose@jose.com",address:"Calle sin número, 18",role_id:1, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 3,name: "Amparo", first_surname:"Martínez", second_surname:"López",phone:"654654654",email:"amparo@amparo.com",address:"Calle sin calle, 15",role_id:1, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
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
