const fs = require("fs");
const path = require("path");
let db = require("../database/models");

const Op = db.Sequelize.Op;


//const productsFilePath = path.join(__dirname, "../data/products.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
  index: async (req, res) => {

    try {
      const products = await db.Product.findAll();

      
       
     res.sendFile(path.resolve(__dirname, "../views/home.html"));
    if (req.session.usuarioLogueado) {
      let data = req.session.usuarioLogueado;
      // console.log(data);
      console.log("hay datos en la sesion");
      // res.render("home", { products, toThousand });
      res.render("home", { products, toThousand, data });
    } else {
      res.render("home", { products, toThousand });
    }
  }catch (error){
    return res.send(error)
  }
}
};

module.exports = mainController;
