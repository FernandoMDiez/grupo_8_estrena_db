module.exports = (sequelize, DataTypes) => {
  let alias = "Size";
  let cols = {
    idColor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameColor: {
      type: DataTypes.STRING,
    },
  };
  let config = {
    tableName: "sizes",
    timestamps: true,
    paranoid: true,
  };

  const Size = sequelize.define(alias, cols, config);

  Size.associate = function (models) {
    Size.hasMany(models.Product, {
      as: "products",
      foreignkey: "sizeId",
    });
  };

  return Size;
};
