let db = require("../../database/models");
const Op = db.Sequelize.Op;
let color, colorD;

const colorsApiController = {
  /* listar color */
  colorList: async (req, res) => {
    try {
      color = await db.Color.findAll({ include: { all: true } });
      return res.json(color);
    } catch (error) {
      res.send(error);
    }
  },

  // Detalle de color
  colorDetail: async (req, res) => {
    try {
      colorD = await db.Color.findByPk(req.params.id, {
        paranoid: false,
      });
      return res.json(colorD);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = colorsApiController;
