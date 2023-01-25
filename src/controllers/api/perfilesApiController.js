let db = require("../../database/models");
const Op = db.Sequelize.Op;
let perfil, perfilD;

const perfilesApiController = {
  /* listar Perfiles */
  perfilList: async (req, res) => {
    try {
      perfil = await db.Perfil.findAll({ include: { all: true } });
      return res.json(perfil);
    } catch (error) {
      res.send(error);
    }
  },

  // Detalle de perfiles
  perfilDetail: async (req, res) => {
    try {
      perfilD = await db.Perfil.findByPk(req.params.id, {
        paranoid: false,
      });

      return res.json(perfilD);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = perfilesApiController;
