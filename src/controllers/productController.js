const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
let db = require("../database/models");
const Op = db.Sequelize.Op;


/*  archivo de Productos 
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

/*  archivo de Size 
const sizeFilePath = path.join(__dirname, "../data/size.json");
const sizes = JSON.parse(fs.readFileSync(sizeFilePath, "utf-8"));

/*  archivo de Category 
const categoryFilePath = path.join(__dirname, "../data/category.json");
const categories = JSON.parse(fs.readFileSync(categoryFilePath, "utf-8"));

/*  archivo de Color  
const colorFilePath = path.join(__dirname, "../data/color.json");
const colores = JSON.parse(fs.readFileSync(colorFilePath, "utf-8"));*/

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  productCart: (req, res) => {
    res.render("products/product-cart");
  },

  /* Detalle de Producto */
  productDet: /*async*/ (req, res) => {

    // try {
    //   const {id} = req.params;
    //   const product = await db.Product.findByPK (id);
    //   const categories = await db.Categorie.findAll();
    //   const colores = await db.Color.findAll();
    //   const sizes = await db.Size.findAll();

    //   console.log (product)

    //   res.render ('products/product-detail', {product, categories, colores, sizes, toThousand})

      

    // } catch (error){
    //   return res.send (error)
    // }


   let { id } = req.params;
    let product = products.find((product) => product.id == id);
    console.log (product)
    res.render("products/product-detail", {
      product,
      toThousand,
      sizes,
      categories,
      colores,
    });
  },

  /* Creacion  de Producto */
  productCre: /*async*/ (req, res) => {

       
   /*try {

    const categories = await Category.findAll();
    const colores = await Color.findAll();
     const sizes = await Size.findAll(); 
    
    return res.render ("products/product-creation", { sizes, categories, colores });
  
  } catch (error)  {
    return res.send (error)
  }*/


    res.render("products/product-creation", { sizes, categories, colores });
  },

  /* Guarda Producto de Creacion */
  productStore: (req, res) => {

     // const categories = await Category.findAll();
    // const colores = await Color.findAll();
    // const sizes = await Size.findAll();
    // const errors = validationResult(req);
    
    //  if (errors.isEmpty()) {
      
    //    let image;
    //   if (req.file != undefined) {
    //     image = req.file.filename;
    //   } else {
    //     image = "image-default.jpg";
    //   }

    //   let newProduct = {
    //     ...req.body,
    //     idCategory: req.body.category,
    //     image: image,
    //   };

    //   delete newProduct.category

    //   await Products.create(newProduct)
    //   return res.redirect ('/')


    //  } else  {
    //   return res.render("products/product-creation", {
    //     sizes,
    //     categories,
    //     colores,
    //     errors: errors.errors,
    //     old: req.body,
    //   });
    //  }


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
  productEdi: /* async*/ (req, res) => {


     /*try {
    const {id} = req.params;
    const product = await Products.findByPK (id);
    const categories = await Category.findAll();
    const colores = await Color.findAll();
    const sizes = await Size.findAll();

    res.render("products/product-edition", {
      product,
      toThousand,
      sizes,
      categories,
      colores,
    });
  } catch (error) {
    return res.send(error)
    
  }*/

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
  productUpdate: /*async*/  (req, res) => {


    /*try {
			
			const {id} = req.params
	
			let imageNew
			if(req.file != undefined){
				imageNew = req.file.filename
			} else {
				imageNew = 'default-image.png'
			}
	
			productToEdit = {
	
				...req.body,
				categoryId : req.body.category,
				image: imageNew,
			};
			await Product.update(productToEdit, {
				where: { id }
			})
	
			res.redirect('/products');
		} catch (error) {
			return res.send(error)
			
		}*/
     
    
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
  destroy:  async  (req, res) => {
   
      try {
        const {id} = req.params
        
        await Product.destroy({
          where: { id }
        })
        return res.redirect('/')
  
      } catch (error) {
        return res.send(error)
        
      }
  
      // let id = req.params.id;
      // let finalProducts = products.filter(product => product.id != id);
      // fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
      // res.redirect('/');

  },
};

module.exports = controller;
