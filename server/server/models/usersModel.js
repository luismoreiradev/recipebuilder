const mongoose = require("../bin/mongodb");

const usersSchema= new mongoose.Schema({
    name:{type:String,
                required:true},
    email:{type:String,
    required:true},
    passwor:{type:String} 
   
})
module.exports =mongoose.model("users", usersSchema)