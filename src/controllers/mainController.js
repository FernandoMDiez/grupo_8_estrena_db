const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  index: (req, res) => {
    // res.sendFile(path.resolve(__dirname, "../views/home.html"));
    // res.render("home", { products, toThousand });
    if (req.session.usuarioLogueado) {
      let data = req.session.usuarioLogueado;
      console.log(data);
      console.log("hay datos en la sesion");
      // res.render("home", { products, toThousand });
      res.render("home", { products, toThousand, data });
    } else {
      res.render("home", { products, toThousand });
    }
  },
};

module.exports = mainController;
