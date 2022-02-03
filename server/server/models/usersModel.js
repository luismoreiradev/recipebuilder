const mongoose = require("../bin/mongodb");

const usersSchema= new mongoose.Schema({
    name:{type:String,
                required:true},
    email:{type:String,
    unique:true,
    required:true,
validate:{
    validator:function (v) {
        const regex =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
        return regex.test(v)
    }
}},
    password:{type:String,
    required:true,
    validate:{
        validator:function(v){
                const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;
                return regex.test(v)
        },
        message:"la contrasena debe tener mas de 6"

    }} 
   
})
module.exports =mongoose.model("users", usersSchema)