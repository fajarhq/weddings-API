'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class keluarga_wanita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  keluarga_wanita.init({
    ayah: DataTypes.STRING,
    ibu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'keluarga_wanita',
    freezeTableName: true, 
    timestamps: false,
    tableName: 'keluarga_wanita'
  });
  return keluarga_wanita;
};