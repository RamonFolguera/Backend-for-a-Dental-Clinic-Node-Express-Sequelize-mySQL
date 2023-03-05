'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Appointments', [
      {id: 1,date:"2023-03-01 00:00:00",service_id: 1,user_id: 2, doctor_id: 1,confirmed:true,comments: "First session",createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 2,date:"2023-03-01 00:00:00",service_id: 3,user_id: 2,doctor_id: 2,confirmed:false,comments: "Second session",createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"},
      {id: 3,date:"2023-03-01 00:00:00",service_id: 2,user_id: 5,doctor_id: 1,confirmed:false,comments: "Ask for new appointment after the treatment",createdAt: "2023-03-01 00:00:00", updatedAt: "2023-03-01 00:00:00"}
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
