module.exports = (sequelize, DataTypes) => {
  let alias = "Product";
  let cols = {
    idProduct: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameProduct: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    image: {
      type: DataTypes.TEXT,
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
    Product.belongsTo(models.Categorie, {
      as: "categorie",
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
