const express = require("express");
const { likeController } = require("../controllers/userController");
const { login, signUp } = require("../controllers/Auth") 
const { auth } = require("../middlewares/auth")
const { imageUpload } = require("../controllers/FileUpload");

const router = express.Router();

router.post("/like", likeController);

//Authentication Routes
router.post("/signup", signUp);
router.post("/login", login)
router.post("/imageUpload",imageUpload );



module.exports = router;
