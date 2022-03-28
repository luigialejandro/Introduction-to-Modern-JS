
//-----Funciones en JS-----

//function saludar(nombre) {
//    return `Hola, ${nombre}`;
//}
//
//console.log( saludar('Mauricio') );

//no es recomendable hacer funciones como arriba se hizó porque una línea
//despues de la función se puede hacer saludar=30; y entonces cambia su 
//valor. Eso se requiere evitar

//la forma correcta es como abajo, así ya no se le puede cambiar su valor

const saludar = function( nombre ) {
    return `Hola, ${nombre}`;
}

console.log( saludar('Mauricio') );

//ahora como convertir a función flecha la función de arriba

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

//si se tiene un solo return en el cuerpo de la función se puede simplificar aún más

const saludar3 = ( nombre ) => `Hola, ${nombre}`;

//si no se tienen argumentos, así se llama la función

const saludar4 = ( ) => `Hola Mundo`;

//este es un ejemplo en el que hay que tener cuidado porque se puede confundir
//Cual es el cuerpo de la función dentro de las funciones tipo flecha
//poniendo el cuerpo entre parentésis se arregla

const getUser = () => ({
    uid: 'ABCD123',
    username: 'El_Papi1502'
});


console.log( saludar2('Vegeta') );

console.log( saludar3('Gasparin') );

console.log( saludar4() );

const user = getUser();
console.log( user );






