'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mempelai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mempelai.init({
    pria: DataTypes.STRING,
    wanita: DataTypes.STRING,
    story: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'mempelai',
    freezeTableName: true, 
    timestamps: false,
    tableName: 'mempelai'
  });
  return mempelai;
};