const db=require('../models/database');

function mostrar(){
   mostrar= db.query('SELECT * FROM cliente ') 
}



