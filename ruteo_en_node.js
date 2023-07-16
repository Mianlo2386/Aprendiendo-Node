const http = require ('http')
const cursos = require('./cursos')// desestructurado seria asi const {infoCursos} = require(./cursos)


const servidor = http.createServer((req,res)=>{
    const {method} = req // tambien puede ser asi const = req.method

    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req,res)
        case 'POST':    
            return manejarSolicitudPOST(req,res)
             case 'PUT':
                return manejarSolicitudPUT(req,res)  
            case 'DELETE':    
                return manejarSolicitudDELETE (req,res)
        default:
            res.statusCode = 501
            console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`);
    }
})

function manejarSolicitudGET(req,res){
    const path = req.url // tambien asi const = req.path

    console.log(res.statusCode);

    if(path === '/'){
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.statusCode = 200 //no es necesario porque por defecto es 200
        return res.end('Este servidor y API fueron creados con Node.js')
    }else if(path === '/cursos') {// puede empezar con api asi /api/cursos
        res.statusCode = 200
        return res.end(JSON.stringify(cursos.infoCursos))
    }else if(path === '/cursos/programacion') {
        res.statusCode = 200
        return res.end(JSON.stringify(cursos.infoCursos.programacion))
    }
    res.statusCode = 404
    res.end('El recurso no existe')
}

function manejarSolicitudPOST(req,res){
    const path = req.url

    console.log(res.statusCode);

    if (path === '/cursos/programacion'){

        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo+= contenido.toString()
        })

        req.on('end', ()=> {
            console.log(cuerpo);
            console.log(typeof cuerpo);
            //PARA CONVERTIR A UN OBJETO DE JAVASCRIPT
            cuerpo = JSON.parse(cuerpo)

            console.log(typeof cuerpo);

            res.end('El servidor recibio una solicitud POST para /cursos/programacion')

            console.log(cuerpo.titulo);

            //res.end('El servidor recibio una solicitud POST para /cursos/programacion')
        })

        //res.statusCode = 200//no es necesario porque por defecto es 200
        //return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
    }else{
        
    res.statusCode = 404
    res.end('El recurso no existe2')
    }
}

function manejarSolicitudPUT(req,res){
    const path = req.url

    console.log(res.statusCode);

    if (path === '/cursos/programacion'){
        res.statusCode = 200//no es necesario porque por defecto es 200
        return res.end('El servidor recibio una solicitud PUT para /cursos/programacion')
    }else{
        
    res.statusCode = 404
    res.end('El recurso no existe')
    }
}

function manejarSolicitudDELETE(req,res){
    const path = req.url

    console.log(res.statusCode);

    if (path === '/cursos/programacion'){
        res.statusCode = 200//no es necesario porque por defecto es 200
        return res.end('El servidor recibio una solicitud DELETE para /cursos/programacion')
    }else{
        
    res.statusCode = 404
    res.end('El recurso no existe')
    }
}
const PUERTO = 3000

servidor.listen(PUERTO, ()=>{
    console.log(`El servidor se esta ejecutando en el puerto:. ${PUERTO}`);
})