const bd = require('../models/database')

exports.addventas=async(req,res,next)=>{
    const datosventas = req.body;
    try {
      await bd.query('INSERT INTO ventasfichos set ?', [datosventas])   
      res.json({mensaje:'Venta Exitosa'})
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.obtenertodos=async(req,res,next)=>{
    try {
     const ventas= await bd.query('SELECT * FROM ventasfichos')   
      res.json(ventas)
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.obtenerVentasSedes=async(req,res,next)=>{
    const {id}= req.params;
    try {
     const venta= await bd.query('SELECT * FROM ventasfichos WHERE idS =?',[id])   
      res.json(venta)
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.obtenerVentasEstuden=async(req,res,next)=>{
    const {idE}= req.params;
    try {
     const ventaE= await bd.query('SELECT * FROM ventasfichos WHERE idE =?',[idE])   
      res.json(ventaE)
    } catch (error) {
        console.log(error)
        next();
    }
}