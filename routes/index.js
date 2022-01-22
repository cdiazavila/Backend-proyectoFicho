const { Router } = require('express');
const express = require('express');
const router = express.Router();
const controllerEstudiantes= require('../controllers/controllerEstudiantes');
const controllerFicho = require('../controllers/controllerFichos');
const controlleSede = require('../controllers/controllerSede');
const controlleVenta=require('../controllers/controllerVenta');

module.exports = function(){
  
// metodo get  estudiante
router.get('/estudiantes', controllerEstudiantes.odtenerEstudiantes);


// metodo post estudiante
router.post('/estudiantes',controllerEstudiantes.agregarestudiantes);

// metodo para mostrar un solo estudiante

 router.get('/estudiantes/:id',controllerEstudiantes.obtenerEstudiante);

// eliminar un estudiante con id dado 

router.delete('/estudiantes/:id',controllerEstudiantes.eliminarEstudiante);

// ruta para update estudiante
router.put('/estudiantes/:id',controllerEstudiantes.updateEstudiante);

//RUTAS PARA LOS FICHOS 
//Actualizar Fichos
router.put('/ficho/:id',controllerFicho.updateFicho);
// obtener datos de los fichos 
router.get('/ficho',controllerFicho.obtenerFichos);

// RUTAS PARA LA SEDE 
// Obtener informacion de la sede 
router.get('/sede',controlleSede.odtenerSedes)
// Guardar sedes 
router.post('/sede',controlleSede.addSede)
// buscar sede con id
router.get('/sede/:id',controlleSede.odtenerSede)
// Eliminar con id 
router.delete('/sede/:id',controlleSede.eliminarSede)
// Update con id 
router.put('/sede/:id',controlleSede.updateSede)


// RUTAS PARA LA TABLA VENTAS

//ADD UNA VENTA 
router.post('/venta',controlleVenta.addventas)
//OBTENER TODO LOD DATOS
router.get('/venta',controlleVenta.obtenertodos)
// Buscar las ventas por sedes 
router.get('/venta/:id',controlleVenta.obtenerVentasSedes)
// Buscar las ventas por estudiantes
router.get('/ventas/:idE',controlleVenta.obtenerVentasEstuden)

    return router;


}

