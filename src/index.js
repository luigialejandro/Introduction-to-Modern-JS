//-----Desestructuración-----

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
};

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

//como se puede ver en el ejemplo anterior, si necesito el valor de una propiedad,
//resulta tedioso tener que estar escribiendo un console.log por cada atributo

//esta sería una forma de desestructurar 

//const { nombre, edad, clave } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

//otro e.g.
//es común que se haga la desestructuración desde el argumento de la función

const retornaPersona = ({ nombre, edad}) => {
    console.log( nombre, edad );
}

retornaPersona( persona );






