//CARGAR LAS VARIABLES DEL SISTEMA
require('dotenv').config();

const server = require('./app');

async function init(){
    await server.listen(server.get('port'),()=>{
        console.log('server on port', server.get('port'));
    });
}

init();