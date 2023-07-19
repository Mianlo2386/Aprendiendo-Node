const express = require('express')

const routerProgramacion = express.Router()

const {programacion} = require('../datos/cursos.js').infoCursos

routerProgramacion.use(express.json()) //MIDDLEWARE

routerProgramacion.get('/', (req,res)=>{
    res.send(JSON.stringify(programacion))//podemos quitar todos los JSON.stringfy por estar trabajando un objeto de JS y tambien poner res.json en vez de .send para que detecte y transforme a json antes de ser enviado
})

routerProgramacion.get('/:lenguaje', (req,res)=>{// se que es un parametro porque estoy poniendo":"
    const lenguaje = req.params.lenguaje
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje)

    
    
    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de: ${lenguaje}.`)
        
    }
    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b)=> b.vistas - a.vistas)))
    }

    res.send(JSON.stringify(resultados))  
    
})

routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel

    const cursosFiltrados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    console.log(cursosFiltrados)

    if(cursosFiltrados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} y nivel ${nivel}`)//si queremos enviar una respuesta vacia return res.status(404).end()
    }else{
        
        res.send(JSON.stringify(cursosFiltrados))
    }
})

routerProgramacion.post('/',(req,res)=>{
    let cursoNuevo = req.body
    programacion.push(cursoNuevo)
    res.send(JSON.stringify(programacion))
})

routerProgramacion.put('/:id',(req,res)=>{
    const cursoActualizado = req.body
    const id = req.params.id

    const indice = programacion.findIndex(curso=> curso.id == id)

    if(indice>=0){
        programacion[indice]=cursoActualizado
    }else{
        res.status(404)
        res.send('el curso no existe')
    }
    res.send(JSON.stringify(programacion))
})

routerProgramacion.patch('/:id',(req,res)=>{
    const infoActualizada = req.body
    const id = req.params.id

    const indice = programacion.findIndex(curso=> curso.id == id) 

    if(indice>=0){
        const cursoAModificar = programacion[indice]
        Object.assign(cursoAModificar,infoActualizada)
   }
   res.send(JSON.stringify(programacion))

})
routerProgramacion.delete('/:id',(req,res)=>{
    const id = req.params.id
    
    const indice = programacion.findIndex(curso=> curso.id == id) 

    if(indice>=0){
        programacion.splice(indice, 1)
   }
   res.send(JSON.stringify(programacion))
})


module.exports = routerProgramacion