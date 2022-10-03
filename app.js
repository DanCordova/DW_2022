const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Configurar el motor de templates como ejs
app.set('view engine', 'ejs');
//Definir la carpeta views como carpeta de vistas para ejs
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const router = require('./routes/index.routes');
const { response } = require('express');

app.use('/index', router);

app.get('/',(request, response, next) => {
    response.redirect('/index');
});

app.use((request, response, next) => {
    response.status(404);
    response.sendFile(path.join(__dirname, 'views', 'error.html'));
});


app.listen(3000);