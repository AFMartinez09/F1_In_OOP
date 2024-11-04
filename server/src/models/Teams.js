const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Teams',{
    id: {
      type: DataTypes.UUID,
      dafultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps: false,
  });
};
