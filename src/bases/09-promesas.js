import { getHeroeById } from './bases/08-imp-exp';

//código de una promesa

//const promesa = new Promise( (resolve, reject) => {
//    setTimeout(()=> {
//        console.log('4 segundos después')
//    }, 4000 )
//});

const promesa = new Promise( (resolve, reject) => {
    setTimeout(()=> {
        const heroe = getHeroeById(2);
        resolve( heroe );
    }, 4000 )
});

//'resolve le va a transferir el valor de sus argumentos al then de la promesa'

//pero para que se pueda ejecutar la siguiente función 'then' es necesario
//que en la anterior función se llmae a 'resolve' o a 'reject'
promesa.then((heroe)=> {
    console.log('heroe', heroe)
})



//Ahora, cuando se usa 'reject' y NO 'result' en la promesa ent. se gestiona con
//un catch en promesa.then

//const promesa = new Promise( (resolve, reject) => {
//    setTimeout(()=> {
//        const heroe = getHeroeById(2);
//        reject( 'No se pudo encontrar el Héroe' );
//    }, 4000 )
//});

//promesa.then((heroe)=> {
//    console.log('heroe', heroe)
//})
//.catch( err => console.warn( err ) );

//FALTA LA PARTE DE FUNCION ASINCRONA. REV EN EL VIDEO. NO SE ANOTO PARA NO SATURAR DE INFO