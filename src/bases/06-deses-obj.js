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

//función original, de parámetro se le puede hacer pasar la persona
//const retornaPersona = ( usuario ) => {
//    console.log(usuario)
//}

//se puede desestructurar el objeto persona de la manera siguiente, es una forma

//const retornaPersona = ( usuario ) => {
//    const { edad, clave, nombre } = usuario;
//    console.log( edad, clave, nombre )
//}

//pero de hecho es más usada la desestructuración dentro del argumento de la misma función

//si solo quisiera el nombre

//const retornaPersona = ({ nombre }) => {
//    console.log( nombre );
//}

//si adicional, se quisiera la edad, ent queda

//const retornaPersona = ({ nombre, edad}) => {
//    console.log( nombre, edad );
//}

//retornaPersona( persona );

//ahora una función común y corriente que devolvería un objeto

//pero no compila porque useContext dice que es reservado para React

//const useContext = ({ nombre, edad, clave}) => {
//    //console.log( nombre, edad );
//    return {
//        nombreClave: clave,
//        anios: edad
//    }
//}

//const { nombreClave, anios } = useContext( persona );

//no me deja usar useContext, dice que es reservado de React

//console.log( nombreClave, anios );




