const express= require("express");

const router = express.Router()

const {portfolioPage1, portfolioPage2, portfolioPage3, portfolioPage4} = require("../controllers/indexController")

router.get("/1",(req, res) => {
    portfolioPage1(req, res);
});

router.get("/2",(req, res) => {
    portfolioPage2(req, res);
});

router.get("/3",(req, res) => {
    portfolioPage3(req, res);
});

router.get("/4",(req, res) => {
    portfolioPage4(req, res);
});


module.exports = router;