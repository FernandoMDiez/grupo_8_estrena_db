let db = require("../../database/models");
const Op = db.Sequelize.Op;
let users, usersBorrados, perfilN;

const usersApiController = {
  /* USUARIO LISTAR */
  userListActivos: async (req, res) => {
    try {
      users = await db.User.findAll({
        attributes: ["id", "firstName", "lastName", "email", "perfilId"],
        include: { all: true },
      });
      for (let i = 0; i < users.length; i++) {
        users[i].setDataValue(
          "detail",
          `http://localhost:3005/api/users/${users[i].id}`
        );
      }
      users = {
        meta: {
          status: 200,
          total: users.length,
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
        attributes: [
          "id",
          "firstName",
          "lastName",
          "email",
          "perfilId",
          "tel",
          "image",
        ],
        where: { id: req.params.id },
        include: { all: true },
      });
      userD.setDataValue(
        "urlImage",
        `http://localhost:3005/images/users/${userD.image}`
      );
      return res.status(200).json(userD);

      //     return res.json(userD);
    } catch (error) {
      res.send(error);
    }
  },
};

module.exports = usersApiController;
