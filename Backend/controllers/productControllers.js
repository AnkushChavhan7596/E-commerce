const Product = require("../models/productModel");

// get all products
const getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find({});

        if(!products) return res.json({msg : "Products not found"});

        return res.json({products : products, msg : "Products found successfully !!"});
 
    }catch(error){
     console.log(error.message);
     res.json({msg : error.message});
    }
 }

// create product
const addProduct = async (req, res) =>{
   try{

    const product = await Product.create(req.body);

    if(!product){
        return res.json({msg : "Product not added, something wents wrong"});
    }

    return res.json({product : product, msg : "Product added successfully !!"});

   }catch(error){
    console.log(error.message);
    res.json({msg : error.message});
   }
}

// get product
const getProduct = async (req, res) =>{
    try{
        const product = await Product.findById(req.params.id);

        if(!product){
            return res.json({msg : "Product not found"});
        }

        return res.json({product: product, msg : "Product found successfully !!"});
 
    }catch(error){
     console.log(error.message);
     res.json({msg : error.message});
    }
 }

// update product
const updateProduct = async (req, res) =>{
    try{

        const product = await Product.findByIdAndUpdate(req.params.id, req.body);

        if(!product){
            return res.json({msg: "Product not updated, something wents wrong !"});
        }

        return res.json({product : product, msg : "Product updated successfully"});
 
    }catch(error){
     console.log(error.message);
     res.json({msg : error.message});
    }
 }

// delete product
const deleteProduct = async (req, res) =>{
    try{

        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product){
            return res.json({msg : "Product not deleted"})
        }

        return res.json({product : product, msg : "Product deleted successfully !!"});
 
    }catch(error){
     console.log(error.message);
     res.json({msg : error.message});
    }
 }



module.exports = {
   getProduct,
   addProduct,
   updateProduct,
   deleteProduct,
   getAllProducts
}