const express = require("express");
const { likeController } = require("../controllers/userController");
const { login, signUp } = require("../controllers/Auth") 
const { auth } = require("../middlewares/auth")

const router = express.Router();

router.post("/like", likeController);

//Authentication Routes
router.post("/signup", signUp);
router.post("/login", login)



module.exports = router;
