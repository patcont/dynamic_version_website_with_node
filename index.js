var express = require ('express');
var app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.render("index")
})

app.get('/contacto', (req, res) => {
    res.render("contacto")
})

app.get('/servicios', (req, res) => {
    res.render("servicios")
})

app.listen(port, () => {
    console.log("running", port)

})