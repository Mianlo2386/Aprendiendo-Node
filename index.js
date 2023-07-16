const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(promesaCumplida) {
            resolve('¡Promesa Cumplida!');
        }else{
            reject('Promesa rechazada...')
        }
    },3000);
});

// Manejo de promesas

const manejarPromesaCumplida = (valor)=>{
    console.log(valor);
}

const manejarPromesaRechazada = (razonRechazo)=>{
    console.log(razonRechazo);
}

// Llamado de funciones con parametros en caso de rechazo o exito

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)

/* miPromesa.then((valor)=>{
    console.log(valor);
}); */