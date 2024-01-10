//import your database connection
const mongoose = require("mongoose");
const poemSchema = new mongoose.Schema ({
title:{
    type:String, required:true,
    unique:true
},
isCompleted:{
    type:Boolean,
    required:true

}
})
const poemModel = mongoose.model("poem",poemSchema)
module.exports=poemModel