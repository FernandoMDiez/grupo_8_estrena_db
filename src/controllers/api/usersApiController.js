let db = require("../../database/models");
const Op = db.Sequelize.Op;
let users, usersBorrados, perfilN;

const usersApiController = {
  /* USUARIO LISTAR */
  userListActivos: async (req, res) => {
    try {
      users = await db.User.findAll({ include: { all: true } });
      users = {
        meta: {
          status: 200,
          total: users.length,
          url: "api/users",
        },
        data: users,
      };
      return res.json(users);
    } catch (error) {
      res.send(error);
    }
  },
  userListBajas: async (req, res) => {
    try {
      usersBorrados = await db.User.findAll({
        include: { all: true },
        where: {
          deletedAt: {
            [db.Sequelize.Op.ne]: null,
          },
        },
        paranoid: false,
      });
      return res.json(usersBorrados);
    } catch (error) {
      res.send(error);
    }
  },

  // Detalle de perfiles
  userDetail: async (req, res) => {
    try {
      const userD = await db.User.findOne({
        where: { id: req.params.id },
        include: { all: true },
      });

      return res.json(userD);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = usersApiController;
