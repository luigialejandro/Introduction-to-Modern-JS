
//-----Arreglos en JS-----

//primero que nada no se recomienda hacer un arreglo de esta manera...usando el
//constructor de Array(), sino simplemente usando arreglo literal []
//solo excepto talves para el caso en que se quiera darle un tamaño, eg 100
// const arreglo = new Array(100);
//const arreglo = new Array();

//const arreglo = [];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

//tampoco es recomendable usar push porque este modifica el objeto principal (si, el
//arreglo tambien es un objeto)

const arreglo = [1,2,3,4];

//let arreglo2 = arreglo;   <----recordad que es forma incorrecta de clonar
//arreglo2.push(5);     <----tratar de no usar el push

//voy a anexar un 5 al arreglo 2 usando el operador spread, para quitar toda referencia

let arreglo2 = [ ...arreglo, 5 ];


//map() es un método del prototipo de array que ejecuta una función en su interior 
//llamada callback
const arreglo3 = arreglo2.map( function(numero) {
    return numero*2;
});

console.log(arreglo);

console.log(arreglo2);

console.log(arreglo3);



