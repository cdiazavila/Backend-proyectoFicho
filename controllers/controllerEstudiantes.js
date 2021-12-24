//const modelEstudiante = require('../models/estudianteModel');
const db = require('../models/database');
/** Obtiene todos los estudiantes */
exports.odtenerEstudiantes = async (req, res, next) => {
    try {

        const estudiantes = await db.query('SELECT * FROM estudiante');
        res.json(estudiantes);

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.agregarestudiantes = async (req, res, next) => {
    // crear objeto de paciente con datos de req.body
    // const { cc, nombres, nombres, carrera, saldo, usuario, pass } = req.body;
    const datos= req.body;
    try {
        await db.query('INSERT INTO estudiante set ?', [datos]);
        // const newestudent = {
        //     cc,
        //     nombres,
        //     apellidos,
        //     carrera,
        //     saldo,
        //     usuario,
        //     pass
        // };
        //  await db.query('INSERT INTO estudiante set ?', [newestudent]);
        
        res.json({ mensaje: 'El Estudiante se agregó correctamente' });
    } catch (error) {
        console.log(error);
        next();

    }
}

// metodo para buscar un estudiante con el id 
exports.obtenerEstudiante = async (req, res, next) => {
   
    // const { cc, nombres, nombres, carrera, saldo, usuario, pass } = req.body;
    const { id }= req.params;
    try {
       const estudiante = await db.query('SELECT * FROM estudiante WHERE cc=?',[id]);
     
        res.json(estudiante);
    } catch (error) {
        console.log(error);
        next();

    }
}


// metodo para elinimar un estudiante 

exports.eliminarEstudiante= async(req,res,next) => {
    const {id}=req.params;
    try {
       await db.query('DELETE FROM estudiante WHERE cc=?',[id]);
       res.json({mensaje:'Estudiante Eliminado'});
    } catch (error) {
        console.log(error)
        next();
        
    }
}

// metodo para editar un estudiante 
exports.updateEstudiante= async(req,res,next) => {
    const {id}=req.params;
    const datosUdate=req.body;
    console.log(id)
    try {
       await db.query('UPDATE estudiante set ? WHERE cc = ?',[datosUdate,id]);
       res.json({mensaje:'los Datos Del Estudiante Se Update'});
    } catch (error) {
        console.log(error)
        next();
        
    }
}