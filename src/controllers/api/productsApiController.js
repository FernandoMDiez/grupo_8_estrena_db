let db = require("../../database/models");
const Op = db.Sequelize.Op;
let products, productsD;

const productsApiController = {
  /* Listar Productos */
  productList: async (req, res) => {
    try {
      products = await db.Product.findAll({ include: { all: true } });
      return res.json(products);
    } catch (error) {
      res.send(error);
    }
  },

  // Detalle de Productos
  productDetail: async (req, res) => {
    try {
      productsD = await db.Product.findByPk(req.params.id, {
        paranoid: false,
      });

      return res.json(productsD);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = productsApiController;
