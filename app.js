const express = require('express');
const app = express();

const bodyParser = require('body-parser');



console.log("hola");
console.log("hola");


//Middleware
//Se usan funciones anonimas para registrar
//Recibe tres parametros, objeto request con toda la peticion del cliente
//Response la respuesta
//Next es la funcion que hace que avance hacia el siguiente middleware

app.use((request,response,next) => {
    console.log('Middleware!');
    next();
});

app.use('/robots/new',(request,response,next) => {
    let html = '<!DOCTYPE html>'
    console.log('Respuesta de la ruta "/robots/new"');
    response.send();
});

app.use('/robots',(request,response,next) => {
    console.log('Respuesta de la ruta "/robots"');
    next();
});

app.use((request,response,next) => {
    console.log('Otro middleware!');
    response.send('Hola mundo');
});

app.use(bodyParser.urlencoded({extended: false}));

app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});

app.listen(3000);