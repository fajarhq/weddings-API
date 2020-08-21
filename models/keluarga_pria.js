'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class keluarga_pria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  keluarga_pria.init({
    ayah: DataTypes.STRING,
    ibu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'keluarga_pria',
    freezeTableName: true, 
    timestamps: false,
    tableName: 'keluarga_pria'
  });
  return keluarga_pria;
};