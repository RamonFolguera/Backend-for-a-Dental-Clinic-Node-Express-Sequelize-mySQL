'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {id: 1,name: "Ramón", first_surname:"Folguera", second_surname:"Carbonell",phone:"666555444",address:"44 Palmers Road",email:"ramon@ramon.com",password:"123456",role_id:1, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 2,name: "Jose Andrés", first_surname:"Oliver", second_surname:"Abel",phone:"665544332",address:"10 Whiston Road",email:"jose@jose.com",password:"789123",role_id:1, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 3,name: "Amparo", first_surname:"Martínez", second_surname:"López",phone:"654654654",address:"11 St Peters Way",email:"amparo@amparo.com",password:"456789",role_id:1, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 4,name: "Paula", first_surname:"Ribelles", second_surname:"Camacho",phone:"654987321",address:"13 Broadway Market",email:"paula@paula.com",password:"121212",role_id:1, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"}
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
