module.exports = (sequelize, dataTypes) => {
  let alias = "Category";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameCategory: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tableName: "categories",
    timestamps: true,
    paranoid: true,
  };

  const Category = sequelize.define(alias, cols, config);

  Category.associate = function (models) {
    Category.hasMany(models.Product, {
      as: "products",
      foreignkey: "categoryId",
    });
  };

  return Category;
};
