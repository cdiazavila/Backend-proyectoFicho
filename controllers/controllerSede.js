const db = require('../models/database');
exports.odtenerSede = async (req, res, next) => {
    try {
   
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.addSede= async(req,res,next)=>{
   const datosSede = req.body;
    try {
      await db.query('INSERT INTO sede set ?', [datosSede])   
      res.json({mensaje:'Los datos de la sede se Guardaron Correctamente..'})
    } catch (error) {
        console.log(error)
        next();
    }
}