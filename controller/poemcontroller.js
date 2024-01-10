//import the model
const poemModel = require("../model/poemModel");
// import axios
const axios = require("axios");

//external api
const exAPI = "https://jsonplaceholder.typicode.com/todos";
//create all bussiness
//fetch external data
const externalData = async(req,res)=>{
    try{
        const response = await axios.get(exAPI);
        const extractedData = response.data;

        //posting the external data to our own database
        for (const externalObject of extractedData){
            const newPoem = new poemModel({
                title: externalObject.title,
                isCompleted:externalObject.completed,
            });
            //save the data
newPoem.save();
    
        }
        //throw respond
        res.status(200).json({
            message:"sent successfully",
            extractedData
        })
    }catch(err){
        res.status(500).json({
         message:"we need problem",
         Error:err.message,  
        });
    }
};


//create all business logic
// fetch external data



//get all
const getAll = async(req,res)=>{
    try{
const allData = await poemModel.find()
res.status(200).json({
    message:`successful`,
    Data: allData
})
    }catch(err){
       res.status(500).json({
        message:"no user found"
       })
    }
}








//getone
const getOne = async(req,res)=>{
    try{
const id = req.params.id
const getOneByid = await poemModel.findById(id)
res.status(200).json({
    Data:getOneByid
})
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}
//update

const update = async(req,res)=>{
    try{
const id =req.params.id
const data = {
    title:req.body.title,
    isCompleted:req.body.isCompleted
}
const updateone = await poemModel.findByIdAndUpdate(id, data, {new:true})

res.status(200).json({
    message:`Poem with id: ${id} is updated successfully`,
    updateone
})
    }catch(error){
      res.status(500).json({
        message:error.message
      }) 
    }
}
//delete
const deleteOne = async(req,res)=>{
    try{
const id = req.params.id
const deleteid = await poemModel.findByIdAndDelete(id)
res.status(200).json({
    message:`user with id ${deleteid.id} is deleted sucessfully`
})
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}
 

module.exports={
    externalData, 
    getAll,
    getOne,
    update,
    deleteOne

}