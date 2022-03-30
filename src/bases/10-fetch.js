

const apiKey = 'XXBtmrHM4MsvyZSx0Vdrdo5x3BUgSsiP';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//como es una promesa, puedo hacer una peticion.then

//promesa para visualizar la data (json) dentro de mi primera promesa

//peticion.then( resp => {
//    resp.json().then( data => {
//        console.log(data)
//    })
//})
//.catch( console.warn );

//no es la mejor forma de escribir el código de la petición, se sugiere usar el 
//siguiente que devuelve el mismo resultado pero el código es más limpio

peticion
    .then( resp => resp.json() )
    .then ( ({data}) => {
        //console.log( data.images.original.url )
        const { url } = data.images.original;
        console.log(url)

        //ahora voy a poner la imagen en el HTML
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
    .catch( console.warn );
