module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameProduct: {
      type: dataTypes.STRING,
    },
    description: {
      type: dataTypes.STRING,
    },
    price: {
      type: dataTypes.DECIMAL,
    },
    image: {
      type: dataTypes.TEXT,
    },
  };
  let config = {
    tableName: "products",
    //underscored: true,
    timestamps: true,
    paranoid: true,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      as: "category",
      foreignKey: "categoryId",
    });
  };

  Product.associate = function (models) {
    Product.belongsTo(models.Color, {
      as: "color",
      foreignKey: "colorId",
    });
  };

  Product.associate = function (models) {
    Product.belongsTo(models.Size, {
      as: "size",
      foreignKey: "sizeId",
    });
  };

  return Product;
};
