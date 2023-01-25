const { setRandomFallback } = require("bcryptjs");
let db = require("../database/models");

const Op = db.Sequelize.Op;

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  index: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      res.render("home", { products, toThousand });
    } catch (error) {
      return res.send(error);
    }
  },
};

module.exports = mainController;
