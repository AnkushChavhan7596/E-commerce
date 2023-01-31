const router = require("express").Router();

const { get_login, post_login, get_register, post_register } = require("../controllers/authControllers");

// get login
router.get("/login", get_login);

// post login
router.post("/login", post_login);

// get register
router.get("/register", get_register);

// post register
router.post("/register", post_register);


module.exports = router;