
//-----Objetos literales-----

//las llaves son un objeto

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 9510,
        lat: 14.3235,
        lon: 34.9221
    }
};

//despliega la información del objeto persona en forma de tabla
//console.table( persona );

console.log( persona );

//forma correcta de hacer clon de un objeto sin terminar solo haciendo referencia a él.

const persona2 = { ...persona };
persona2.nombre = 'Peter';
//se trata del operador spread(tres puntos)
console.log(persona2);





