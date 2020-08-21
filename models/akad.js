'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class akad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  akad.init({
    lokasi: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    jam: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'akad',
    freezeTableName: true, 
    timestamps: false,
    tableName: 'akad'
  });
  return akad;
};