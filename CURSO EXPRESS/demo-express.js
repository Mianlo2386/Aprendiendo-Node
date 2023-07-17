const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const app = express()

const {infoCursos} = require('./datos/cursos.js')

//Routers

const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion)// aca le asigno a routerProgramacion la ruta /api/cursos/programacion

const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematicas)

//console.log(infoCursos);
// Comenzamos con el routing
app.get('/',(req,res)=>{
    res.send('Hola gente bella y linda')
})

app.get('/api/cursos', (req,res)=>{//si le agrego =>/api a la ruta no funciona, perdon estaba mal apuntado
    res.send(JSON.stringify(infoCursos))
})

//Cursos de programacion 




//Cursos de matematicas



const PUERTO = process.env.PORT 

app.listen(PUERTO, ()=> {
    console.log(`El servidor con express esta ejecutandose em el puerto: ${PUERTO}...`);
})