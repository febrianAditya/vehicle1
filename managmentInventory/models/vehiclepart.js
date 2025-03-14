'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehiclePart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VehiclePart.init({
    idVehicle: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: "Parts"
        },
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }
    }
  }, {
    sequelize,
    modelName: 'VehiclePart',
  });
  return VehiclePart;
};