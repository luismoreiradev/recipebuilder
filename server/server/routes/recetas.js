var express = require('express');
var router = express.Router();

const  recetasController=require("../controllers/recetasController")

/* GET home page. */
router.get('/', recetasController.getAll);

module.exports = router;
