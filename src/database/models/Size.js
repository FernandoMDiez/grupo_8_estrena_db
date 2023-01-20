module.exports = (sequelize, dataTypes) => {
  let alias = "Size";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameSize: {
      type: dataTypes.STRING,
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
