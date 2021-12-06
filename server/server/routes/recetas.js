var express = require('express');
var router = express.Router();

const  recetasController=require("../controllers/recetasController")

/* GET home page. */
router.get('/', recetasController.getAll);
router.post('/',recetasController.create);
router.get('/:id', recetasController.getById);
router.put('/:id', recetasController.update);
router.delete('/:id', recetasController.delete);

module.exports = router;
