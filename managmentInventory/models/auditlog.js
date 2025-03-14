'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuditLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AuditLog.belongsTo(models.User, {
        foreignKey: "userId"
      })
    }
  }
  AuditLog.init({
    action: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: "Users"
        },
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }
    }
  }, {
    sequelize,
    modelName: 'AuditLog',
  });
  return AuditLog;
};