const db = require('../models/database');
exports.odtenerSedes = async (req, res, next) => {
    try {
      const sedes = await db.query("SELECT * FROM sede")
      res.json(sedes)
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.odtenerSede = async (req, res, next) => {
    const { id }= req.params;
    try {
       const sede = await db.query('SELECT * FROM sede WHERE id=?',[id]);
     
        res.json(sede);
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


exports.eliminarSede = async (req, res, next) => {
    const { id }= req.params;
    try {
        await db.query('DELETE FROM sede WHERE id=?',[id]);
     
        res.json({mensaje:'Sede Eliminada Exitosa'});
    } catch (error) {
        console.log(error);
        next();

    }
}

exports.updateSede=async(req, res, next)=>{
    const {id}=req.params;
    const datosUdate=req.body;
    try {
        await db.query('UPDATE sede set ? WHERE id = ?',[datosUdate,id]);
        res.json({mensaje:'La sede se update correctamente'});
    } catch (error) {
        console.log(error)
        next();
    }
}