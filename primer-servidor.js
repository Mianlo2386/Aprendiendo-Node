const http = require('http')

const servidor = http.createServer((req,res)=>{
    //Proceso
    console.log('Solicitud nueva');
    res.end('Hola Gente!')
})

const PUERTO = 3000

servidor.listen(PUERTO, ()=>{
    console.log(`Servidor ejecutandose en el puerto: ${PUERTO}`);
})