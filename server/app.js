const express = require ('express');
const app = express ();
const hbs= require("express-handlebars")
const path = require("path"); 

app.engine("hbs", hbs.engine({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "/public")))

const port = 4200

const indexRouter = require("./routes/indexRoute");
const portfolioRoute = require("./routes/portfolioRoute");

app.use("",indexRouter)
app.use("/portfolio", portfolioRoute);


app.listen(port, () => {
console.log('servidor rodando em http://localhost:'+ port)
})
