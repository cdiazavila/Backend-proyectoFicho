/*const modelEstudiante = require('../models/estudianteModel') "cc":"111",
    "nombres":"Carolina",
    "apellidos":"gutierrez",
    "carrera": "Lic en naturales",
    "saldo":"23000",;*/
const db = require('../models/database');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
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
     const { cc, nombres, apellidos, carrera, saldo, usuario, pass } = req.body;
    const datos= req.body;

    try {
         // Hashar la contraseña 
        //const salt = bcrypt.genSaltSync(10);
         datos.pass = await bcrypt.hash(datos.pass,8);
      
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

// metodo para login 
exports.loginUser = async (req, res) => { 
    const datos = req.body;
    
   
    try {
  
      
        let estudiantes = await db.query('SELECT * FROM `estudiante` WHERE usuario = ? AND pass=?',[datos.usuario,datos.pass]);
        
       // const validarpass = bcrypt.compareSync(datos.pass, estudiantes[0].pass)
     
        console.log(datos.pass);
        if(estudiantes.length===0){
        return res.status(400).json({
                ok: false,
                msg: 'Usuario o Contraseña Incorrecta'
            })
          }else{
              return  res.status(200).json({
            ok:true,
            id:estudiantes[0].cc,
            nombres:estudiantes[0].nombres

        })  
          }


           // confirmar si el password hace mmatch
        /*const validpassword = bcrypt.compareSync(datos.pass, estudiantes[0].pass);
        console.log(validpassword)
        if (validpassword===false) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no existe'
            })
        }*/
      
        // generar el JWT JsonToken
       // const token = await generarJWT(estudiantes[0].cc, estudiantes[0].nombres)
        // res.json(token)
          // respuesta del servicio 
                
          
    
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });

    }
}