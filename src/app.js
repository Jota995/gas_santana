const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

//inicializaciones
const server = express();
require('./database');

//configuraciones
server.set('port',process.env.PORT || 3000);

server.set('views', path.join(__dirname, 'views'));
server.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(server.get('views'), 'layouts'),
  partialsDir: path.join(server.get('views'), 'partials'),
  extname: '.hbs',
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
server.set('view engine', '.hbs');

//middlewares

server.use(express.urlencoded({extended:false}));

//rutas del servidor

server.use('/conductores', require('./routes/conductor.route'));

//archivos estaticos

server.use(express.static(path.join(__dirname,'public')));

module.exports = server;