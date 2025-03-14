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
    */
      await queryInterface.bulkInsert('Users', [
        {
          username: 'John',
          email: "jhon@mail.com",
          password: "qwerty",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'Fattah',
          email: "fattah@mail.com",
          password: "qwerty",
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};




const students = ["pak ari", "pak fattah", "pak febri"]
students[1]