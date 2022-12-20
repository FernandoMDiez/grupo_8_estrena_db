module.exports = (sequelize, DataTypes) => {
  let alias = "Color";
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
    tableName: "colors",
    timestamps: true,
    paranoid: true,
  };

  const Color = sequelize.define(alias, cols, config);

  Color.associate = function (models) {
    Color.hasMany(models.Product, {
      as: "products",
      foreignkey: "colorId",
    });
  };

  return Color;
};
