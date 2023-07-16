const estatusPedido = ()=>{
    return Math.random() < 0.8;
    /* const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus; */
}

const miPedidoPizza = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido exitoso! Su pizza esta en camino.')
        }else{
            reject('Ocurrio un error. Por favor intente nuevamente')
        }
    }
    ,3000)
})
/* 
const pedidoExitoso = (valor)=>{
    console.log(valor);
}

const pedidoRechazado = (razonRechazo)=>{
    console.log(razonRechazo);
}

miPedidoPizza.then(pedidoExitoso,pedidoRechazado) */

// LO ANTERIOR MAS COMPACTO

miPedidoPizza
.then((valor)=>{
    
    console.log(valor);
})
.catch((razonRechazo)=>{
    
    console.log(razonRechazo);
})




/* for (let i = 0; i < 10; i++) {
    console.log(estatusPediddo());

} */