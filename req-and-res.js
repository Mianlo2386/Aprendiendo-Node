const http = require('http')

const servidor = http.createServer((req,res)=>{
    console.log('===> req(solicitud)');

    //PARA VER LA URL
    console.log(req.url);

    //PARA VER EL METODO REQUERIDO
    console.log(req.method);

    //PARA MIRAR DETALLES DEL HEADER
    //console.log(req.headers);
    console.log('===>res (respuesta)');

    //PARA VER EL STATUS DE LA PAGINA
    console.log(res.statusCode);

    //SI QUIERO CAMBIAR EL CODIGO PUEDO HACERLO ASI
    //res.statusCode = 404
    //console.log(res.statusCode);

    //PARA CONFIGURAR ELEMENTOS DE LA CABECERA
    //res.setHeader('content-type','application/json')
    console.log(res.getHeaders());

    res.end('Respuesta enviada')
})

const PUERTO = 3000

servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta ejecutandose en el puerto: ${PUERTO}`);
})