'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ucapan_selamat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ucapan_selamat.init({
    user: DataTypes.STRING,
    ucapan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ucapan_selamat',
    freezeTableName: true, 
    timestamps: false,
    tableName: 'ucapan_selamat'
  });
  return ucapan_selamat;
};