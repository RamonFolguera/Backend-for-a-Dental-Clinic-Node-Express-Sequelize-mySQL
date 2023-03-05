'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Services', [
      {id: 1,name: "Scale and polish", description:"To keep your teeth and gums healthy. It removes tartar and plaque build ups and leaves your teeth feeling fresh and clean.", price: 50.5,medication:"Not required", createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 2,name: "White fillings", description:"Filling in one of your front teeth (incisors and canines), the filling material of choice may be a white filling.", price: 300,medication:"Topical gel or local anesthetic administered by injection", createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 3,name: "Root canal treatment (endodontics)", description:"Dental procedure used to treat infection at the centre of a tooth", price: 630,medication:"Local anaesthetic", createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      
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
