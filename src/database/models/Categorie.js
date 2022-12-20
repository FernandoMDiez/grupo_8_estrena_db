module.exports = (sequelize, DataTypes) => {
  let alias = "Categorie";
  let cols = {
    idCategory: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameCategory: {
      type: DataTypes.STRING,
    },
  };
  let config = {
    tableName: "categories",
    timestamps: true,
    paranoid: true,
  };

  const Categorie = sequelize.define(alias, cols, config);

  Categorie.associate = function (models) {
    Categorie.hasMany(models.Product, {
      as: "product",
      foreignkey: "categoryId",
    });
  };

  return Categorie;
};
