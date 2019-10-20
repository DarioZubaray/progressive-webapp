
// if( 'serviceWorker' in navigator) {
//     console.log('podemos usar PWA');
// }

if( navigator.serviceWorker) {
    console.log('podemos utilizar SW');

    navigator.serviceWorker.register('/sw.js');
}

