const app = require('./src/app')
const mongoose = require("mongoose")

function ConnectToDb(){
    mongoose.connect("mongodb+srv://manas:uIbA7ascSyXZsutC@cluster0.0u1nzhu.mongodb.net/Day-5")
    .then(()=>{
        console.log("Connected to Database");
    })
}

ConnectToDb()

app.listen(3000,()=>{
    console.log("Server is running on port 3000")

})