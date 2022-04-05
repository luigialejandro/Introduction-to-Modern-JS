
//la forma tradicional de una condición usando if sería
const activo = true;

//let mensaje = '';

//if ( activo ){
//    mensaje = 'Activo';
//} else {
//    mensaje = 'Inactivo';
//}

//usando el operador ternario
const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

//simplificar el operador aún más para el caso en que solo es true o false
//const mensaje = activo && 'Activo';

console.log( mensaje );