// import express: freamework web (backend)
const express = require("express");
// import express router
const router = express.Router();
// import user model
const User = require("../models/User");
// http method POST define Create in CRUD
router.post("/register", (req, res) => {
  const newPerson = req.body;
  User.create(newPerson)
    .then((doc) => res.send(doc))
    .catch((err) => res.status(401).json(err.message));
});
// http method GET define Read in CRUD
router.get("/all", (req, res) => {
  User.find()
    .then((doc) => res.send(doc))
    .catch((err) => res.status(401).json(err.message));
});
// http method PUT define Update in CRUD
router.put("/update/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send("user updated"))
    .catch((err) => res.status(401).json(err.message));
});
// http method DELETE define Delete in CRUD
router.delete("/delete/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.send("user deleted"))
    .catch((err) => res.status(401).json(err.message));
});
// export router to the server.js
module.exports = router;
