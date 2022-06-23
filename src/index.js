const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
const Router = require('./routes/genderRoutes');

app.use('/', Router);

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));