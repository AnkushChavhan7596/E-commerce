const router = require("express").Router();

const { get_user, update_user, delete_user, all_users } = require("../controllers/userControllers");

const requireAuth = require("../middlewares/requireAuth") 


// all user
router.get("/users", requireAuth , all_users);

// get user
router.get("/:id", requireAuth, get_user);

// update user
router.put("/:id", requireAuth, update_user);

// delete user
router.delete("/:id", requireAuth, delete_user);



module.exports = router;