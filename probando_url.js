const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')

console.log(miURL.hostname);//Muestra el subdominio

console.log(miURL.pathname);//Muestra el path

console.log(miURL.searchParams);//Muestra clave y valor de los query

console.log(typeof miURL.searchParams);//Para poder comprobar que es un objeto

console.log(miURL.searchParams.get('ordenar'));//Para obtener los valores de las claves de los objetos

console.log(miURL.searchParams.get('nivel'));