'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserDetail.belongsTo(models.User, {
        foreignKey: "userId"
      })
    }
  }
  UserDetail.init({
    fullname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
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
    modelName: 'UserDetail',
  });
  return UserDetail;
};