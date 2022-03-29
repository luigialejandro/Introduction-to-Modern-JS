//-----Template Strings-----

const nombre = 'Luigi';
const apellido = 'Courtois';

//concatenación sin el uso de template Strings
const nombreCompleto = nombre + ' ' + apellido;

//concatenación con el uso de los Template 
//se llaman backticks
//alt + 96  :  ````

const nombreCompletoTemplate = `${ nombre } ${ apellido}`;

console.log(nombreCompleto);

console.log( nombreCompletoTemplate);

//tambien aplican los saltos de línea

const nombreCompletoSalto = `
${ nombre } 
${ apellido}
`;

console.log( nombreCompletoSalto);

//también se utilizan para expresiones artiméticas 

const nombreCompletoSaltoArtimetico = `
${ nombre } 
${ apellido}
${ 1 + 1 }
`;

console.log( nombreCompletoSaltoArtimetico);

//aplica con funciones también

function getSaludo(){
    return 'Hola mundo';
}

console.log(`Este es un texto: ${ getSaludo() } `);



