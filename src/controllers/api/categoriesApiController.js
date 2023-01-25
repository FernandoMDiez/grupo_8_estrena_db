let db = require("../../database/models");
const Op = db.Sequelize.Op;
let category, categoryD;

const categoriesApiController = {
  /* listar categorias */
  categoryList: async (req, res) => {
    try {
      category = await db.Category.findAll({ include: { all: true } });
      return res.json(category);
    } catch (error) {
      res.send(error);
    }
  },

  // Detalle de categorias
  categoryDetail: async (req, res) => {
    try {
      categoryD = await db.Category.findByPk(req.params.id, {
        paranoid: false,
      });
      return res.json(categoryD);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = categoriesApiController;
