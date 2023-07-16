const http = require('http')

const servidor = http.createServer((req,res)=>{
    res.end('Hola Gente Linda! Estoy aprendiendo Node.js')
})

const PUERTO = 3000

servidor.listen(PUERTO, ()=> {
    console.log(`El servidor esta ejecutandose em el puerto: ${PUERTO}`);
    
})