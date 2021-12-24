const db = require('../models/database');
exports.updateFicho= async(req,res,next) => {
    const {id}=req.params;
    const datosUdate=req.body;
    console.log(id)
    try {
       await db.query('UPDATE ficho set ? WHERE id = ?',[datosUdate,id]);
       res.json({mensaje:'los Datos se actualizaron Correctamente'});
    } catch (error) {
        console.log(error)
        next();
        
    }
}

    exports.obtenerFichos= async(req,res,next)=>{
      
        try {
          const fichos= await db.query('SELECT * FROM ficho');
           res.json(fichos)
        } catch (error) {
            console.log(error)
            next();
        }
    }
