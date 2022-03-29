//-----Importaciones y exportaciones-----

import { heroes } from '../data/heroes';

//console.log( heroes );
//función que encuentra heroes dentro de una lista (importada) por id

export const getHeroeById = (id) => {
    return heroes.find( ( heroe ) => {
        if ( heroe.id === id ) {
            return true;
        } else {
            return false
        }
    });
}

//la anterior función se puede simplificar aún mas como:

//const getHeroeById = (id) => {
//    return heroes.find( (heroe) => heroe.id === id );
//}

console.log( getHeroeById(2) );

//otra función similar que encuentra Heroes por propietario

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

console.log( getHeroesByOwner('DC') );





