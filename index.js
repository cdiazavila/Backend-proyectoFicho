const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const morgan = require('morgan')


// creamos el servidor 
const app = express();
// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// usamos morgan 
app.use(morgan('dev'));
// se establesen las router
app.use('/', routes());

// asignamos el puerto 

app.set('port',process.env.PORT || 4000);

// puerto y arranco el servidor 
app.listen(app.get('port'), () => {
    console.log('Servidor funcionando',app.get('port') )
})