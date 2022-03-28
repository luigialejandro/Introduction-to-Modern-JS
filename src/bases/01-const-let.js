
//-----Variables y Constantes-----

//var ya no debe usarse

const nombre = 'Luigi';
const apellido = 'Courtois';

let valorDado = 5; 

valorDado = 4;

console.log(nombre, apellido, valorDado);

//en un scope partícular, let valorDado si puede tomar otro valor distinto al que usa
//globalmente, por ejemplo al interior de un if

if (true){
    let valorDado = 512;

    console.log(valorDado);
}

console.log(valorDado);

//lo mismo pasa con las constantes dentro de un scope, pueden adoptar otro valor




