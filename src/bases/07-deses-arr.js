//-----Desestructuración de arreglos-----

const personajes = ['Goku', 'Vegeta', 'Trunks'];

//la forma que no debería usarse para desestructurar

//console.log( personajes[0] );
//console.log( personajes[1] );
//console.log( personajes[2] );

//peg. p/imprimir a 'Goku' en consola

const [ p1 ] = personajes;

console.log( p1 );

//¿y para imprimir a Vegeta?

const [ ,p2 ] = personajes;

console.log ( p2 );

//¿y entonces, para Trunks?

const [ , , p3 ] = personajes;

console.log ( p3 );

//ahora, desestructurar una función que retorna un arreglo

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros);

//Tarea (aunque useState me lo marca como reservado, no me deja compilar)

//const useState = ( valor ) => {
//    return [ valor, ()=>{ console.log('Hola Mundo')}];
//}

//const arr = useState( 'Goku' );
//console.log(arr);









