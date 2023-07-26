const express = require("express");
const { likeController } = require("../controllers/userController");
const router = express.Router();

router.post("/like", likeController);




module.exports = router;
