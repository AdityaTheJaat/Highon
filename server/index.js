const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;


app.use("/user", userRoutes);



mongoose
  .connect(process.env.MONGOOSE_URL, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log("Connected to database");
      console.log(`Server is running at port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });





  //getUser 
  //getPosts 
  //