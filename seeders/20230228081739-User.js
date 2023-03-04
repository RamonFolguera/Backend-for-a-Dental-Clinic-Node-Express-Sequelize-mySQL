'use strict';
const bcrypt = require('bcrypt');
const passwordId1 = '123456';
const passwordId2 = '789123';
const passwordId3 = '456789';
const passwordId4 = '121212';
const passwordId5 = '999999';
const encryptedPassword1 = bcrypt.hashSync(passwordId1, 10);
const encryptedPassword2 = bcrypt.hashSync(passwordId2, 10);
const encryptedPassword3 = bcrypt.hashSync(passwordId3, 10);
const encryptedPassword4 = bcrypt.hashSync(passwordId4, 10);
const encryptedPassword5 = bcrypt.hashSync(passwordId5, 10);


/** @type {import('sequelize-cli').Migration} */
module.exports = {


  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', [
      {id: 1,name: "Ramón", first_surname:"Folguera", second_surname:"Carbonell",phone:"666555444",address:"44 Palmers Road",email:"ramon@ramon.com",password: encryptedPassword1,role_id:3, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 2,name: "Jose Andrés", first_surname:"Oliver", second_surname:"Abel",phone:"665544332",address:"10 Whiston Road",email:"jose@jose.com",password: encryptedPassword2,role_id:1, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 3,name: "Amparo", first_surname:"Martínez", second_surname:"López",phone:"654654654",address:"11 St Peters Way",email:"amparo@amparo.com",password: encryptedPassword3,role_id:3, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 4,name: "Paula", first_surname:"Ribelles", second_surname:"Camacho",phone:"654987321",address:"13 Broadway Market",email:"paula@paula.com",password: encryptedPassword4,role_id:2, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 5,name: "Álvaro", first_surname:"Bernabé", second_surname:"Alonso",phone:"656565656",address:"5 Abbey Road",email:"alvaro@alvaro.com",password: encryptedPassword5,role_id:1, createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"}
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
