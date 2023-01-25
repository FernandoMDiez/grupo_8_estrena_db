let db = require("../../database/models");
const Op = db.Sequelize.Op;
let size, sizeD;

const sizesApiController = {
  /* listar size */
  sizeList: async (req, res) => {
    try {
      size = await db.Size.findAll({ include: { all: true } });
      return res.json(size);
    } catch (error) {
      res.send(error);
    }
  },

  // Detalle de size
  sizeDetail: async (req, res) => {
    try {
      sizeD = await db.Size.findByPk(req.params.id, {
        paranoid: false,
      });

      return res.json(sizeD);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = sizesApiController;
