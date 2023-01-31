const router = require("express").Router();

const { getProduct, addProduct, updateProduct, deleteProduct, getAllProducts } = require("../controllers/productControllers");


// get product
router.get("/:id", getProduct);

// add product
router.post("/add", addProduct);

// update product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

// get all products
router.get("/products", getAllProducts);

module.exports = router;