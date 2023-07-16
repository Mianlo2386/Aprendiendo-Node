function ordenarProducto(producto){
    return new Promise((resolve,reject)=>{
        console.log(`Ordenando: ${producto} de Tienda de Pizzas`);
        setTimeout(()=>{
            if(producto==='muzza'){
                resolve('Ordenando una pizza de muzarella...')
            }else{
                reject('Pedido rechazado. Intente nuevamente, por favor...')
            }
        })
    },2000)
}

function procesarPedido(respuesta){
    return new Promise((resolve,reject)=>{
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(()=>{
            resolve('Gracias por tu compra. Bon apetit!')
        },2000)
    })
}

/* ordenarProducto('muzza')
.then(respuesta=>{
    console.log('Respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta)
})
.then(respuestaProcesada=>{
    console.log(respuestaProcesada);
})
.catch(error=>{
    console.log(error);
}) */

//con async-await

async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto)
        console.log('Respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada);
} catch(error) {
    console.log(error);
}
    }

realizarPedido('muzza')
    