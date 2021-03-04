console.log("Start app.js")

const utils = require('./utils.js'); //console.log (utils.add(5,8))

const port = process.env.PORT || 3000
const express = require("express")
const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render("index", {
        test: "1234"
    })
})

app.listen(port);
