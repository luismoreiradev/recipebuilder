module.exports={
    getAll: function (req,res,next) {
        const recetas =[
            {nombre:"receta 1",
        grano:"grano 1",
    cantidadGrano:100},
    {
       nombre:"receta 2",
        grano:"grano 2",
    cantidadGrano:200 
    }
    ]
    res.json(recetas)
    }
}