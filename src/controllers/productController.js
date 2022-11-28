const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

/*  archivo de Productos */
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

/*  archivo de Size */
const sizeFilePath = path.join(__dirname, "../data/size.json");
const sizes = JSON.parse(fs.readFileSync(sizeFilePath, "utf-8"));

/*  archivo de Category */
const categoryFilePath = path.join(__dirname, "../data/category.json");
const categories = JSON.parse(fs.readFileSync(categoryFilePath, "utf-8"));

/*  archivo de Color */
const colorFilePath = path.join(__dirname, "../data/color.json");
const colores = JSON.parse(fs.readFileSync(colorFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  productCart: (req, res) => {
    res.render("products/product-cart");
  },

  /* Detalle de Producto */
  productDet: (req, res) => {
    let { id } = req.params;
    let product = products.find((product) => product.id == id);
    res.render("products/product-detail", {
      product,
      toThousand,
      sizes,
      categories,
      colores,
    });
  },

  /* Creacion  de Producto */
  productCre: (req, res) => {
    res.render("products/product-creation", { sizes, categories, colores });
  },

  /* Guarda Producto de Creacion */

  productStore: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let image;
      //console.log(req.file);
      if (req.file != undefined) {
        image = req.file.filename;
      } else {
        image = "image-default.jpg";
      }
      let newProduct = {
        id: products[products.length - 1].id + 1,
        ...req.body,
        image: image,
      };
      products.push(newProduct);
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
      res.redirect("/");
    } else {
      return res.render("products/product-creation", {
        sizes,
        categories,
        colores,
        errors: errors.errors,
        old: req.body,
      });
    }
  },
  /* Edicion  de Producto */
  productEdi: (req, res) => {
    let { id } = req.params;
    let product = products.find((product) => product.id == id);
    res.render("products/product-edition", {
      product,
      toThousand,
      sizes,
      categories,
      colores,
    });
  },
  /* Guarda Producto de Edicion */
  productUpdate: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);
    let imageNew;

    if (req.file != undefined) {
      imageNew = req.file.filename;
    } else {
      imageNew = productToEdit.image;
    }

    productToEdit = {
      id: productToEdit.id,
      ...req.body,
      image: imageNew,
    };

    let newProducts = products.map((product) => {
      if (product.id == productToEdit.id) {
        return (product = { ...productToEdit });
      }
      return product;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
    res.redirect("/");

    //res.send(req.body);
    //res.redirect("/");
  },
};

module.exports = controller;
