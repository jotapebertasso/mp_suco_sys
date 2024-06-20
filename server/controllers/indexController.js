const indexPage= (req, res) => { //a const faz o indexPage receber o parâmetro tudo depois do =//
    res.render("index") 
}

const portfolioPage1= (req, res) => {
    res.render("portfolio1")

}

const portfolioPage2= (req, res) => {
    res.render("portfolio2")
}

const portfolioPage3= (req, res) => {
    res.render("portfolio3")
}

const portfolioPage4= (req, res) => {
    res.render("portfolio4")
}

const portfolioPage5= (req, res) => {
    res.render("portfolio5")
}

const portfolioPage6= (req, res) => {
    res.render("portfolio6")
}

module.exports = {indexPage, portfolioPage1, portfolioPage2, portfolioPage3} //exportando esse arquivo para o router//


