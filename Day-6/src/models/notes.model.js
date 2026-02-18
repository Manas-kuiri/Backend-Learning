const mongoose = require("mongoose");

const noteSechma = new mongoose.Schema({
  title: String,
  description: String,
});

const noteModel = mongoose.model("notes", noteSechma);


module.exports=noteModel;
