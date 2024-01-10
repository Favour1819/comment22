
// import mongoose
const mongoose = require("mongoose");

//create our database information
// const host = "localhost:2000"
// const dbName = "poemDB";
// const url = `${host}:${dbName}`;

// connect to mongodb
require('dotenv').config()
const db = process.env.dblink
mongoose.connect(db)
.then(() => {
    console.log("conection established sucessfully")
})
.catch((error)=>{
    console.log("Error connecting to database:"+ error.message);

});
