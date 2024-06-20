//express é um código grande que faz para agilizar o processamento dos códigos//
const express= require("express");

//router é uma função do express que permite rotas fora do servidor//
const router = express.Router()

const {indexPage} =require("../controllers/indexController");

router.get("/",(req, res) => {
    indexPage(req, res);
});

module.exports = router;


//toda função= (=>) precisa ter chave(}) para poder fazer a função 