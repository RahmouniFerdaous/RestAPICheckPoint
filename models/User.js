//import mongoose (library mongoDB)
const mongoose = require("mongoose");
// call the schema  and define it : how the data should look in the db
const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "fullName is required!"],
    default: "user",
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    default: "user.user@gmail.com",
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    unique: true,
    //default:"****" to test required field I commented this line
  },
  age: { type: Number, default: "20" },
  birthDate: { type: Date, default: Date.now },
});
//import the schema wrapped on the model User
module.exports = mongoose.model("User", UserSchema);
