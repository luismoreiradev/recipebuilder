const mongoose = require("../bin/mongodb");

const recetasSchema= new mongoose.Schema({
    titulo:String,
    grano1:String,
    cantidadGrano1:Number,
     grano2:String,
    cantidadGrano2:Number,
     grano3:String,
    cantidadGrano3:Number,
     grano4:String,
    cantidadGrano4:Number,
    grano5:String,
    cantidadGrano5:Number,
     grano6:String,
    cantidadGrano6:Number,
     grano7:String,
    cantidadGrano7:Number,
    lupulo1:String,
    cantidadLupulo1:Number,
    lupulo2:String,
    cantidadLupulo2:Number,
    lupulo3:String,
    cantidadLupulo3:Number,
    lupulo4:String,
    cantidadLupulo4:Number,
    lupulo5:String,
    cantidadLupulo5:Number,
    lupulo6:String,
    cantidadLupulo6:Number,
});

module.exports =mongoose.model("recetas", recetasSchema)