//import express
const express = require("express");
const app = express();
//environment configuration
require("dotenv").config({ PATH: "/.env" });
//import mongoose
const mongoose = require("mongoose");
//connect DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("db connected ..."))
  .catch((error) => console.log(error));
//use json format
app.use(express.json());
//Router : import router from the userRouter file and indicate /user : http://localhost:5000/user
app.use("/user", require("./routers/userRouter"));
//PORT -> .env file
const PORT = process.env.PORT || PORT;
//Listen to PORT if error display error else server is running
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("server is running on PORT... " + PORT);
});
