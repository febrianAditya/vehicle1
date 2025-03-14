'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
    await queryInterface.bulkInsert('UserDetails', [
      {
        fullname: 'Fattahillah',
        age: 25,
        address: "Bekasi",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: 'Jhon Doe',
        age: 29,
        address: "Jakarta",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('UserDetails', null, {});
  }
};
