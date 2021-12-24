const express = require('express');
const router = express.Router();
const controllerEstudiantes= require('../controllers/controllerEstudiantes');
const controllerFicho = require('../controllers/controllerFichos');
const controlleSede = require('../controllers/controllerSede');

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
router.get('/sede',controlleSede.odtenerSede)
// Guardar sedes 
router.post('/sede',controlleSede.addSede)


    return router;


}

