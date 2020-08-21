'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resepsi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  resepsi.init({
    lokasi: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    jam: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'resepsi',
    freezeTableName: true, 
    timestamps: false,
    tableName: 'resepsi'
  });
  return resepsi;
};