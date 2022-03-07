const express = require("express")
const productosController = require("./../controllers/productosController")

const express = require("express");
const router = express.Router();

router.get("/",productosController.index)
router.get("/product",productosController.product)


