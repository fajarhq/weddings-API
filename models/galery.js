'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class galery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  galery.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'galery',
    freezeTableName: true, 
    timestamps: false,
    tableName: 'galery'
  });
  return galery;
};