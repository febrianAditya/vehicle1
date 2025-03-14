'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VehicleParts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idVehicle: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Vehicles"
          },
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
      },
      idPart: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Parts"
          },
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VehicleParts');
  }
};