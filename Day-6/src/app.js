//Create the Server

const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  //Destracture the notes data
  const { title, description } = req.body;

  const note = await noteModel.create({ //Create a note in database
    title,
    description,
  });

  //sending the status when the note is created

  res.status(201).json({
    message: "Note Created Successfully",
    note
    
  });

});

app.get("/notes",async(req,res)=>{
  const note =await noteModel.find()

  res.status(200).json({
    message:"Note Fatch Successfully",
    note,
  })
})
module.exports = app;
