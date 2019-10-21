
// if( 'serviceWorker' in navigator) {
//     console.log('podemos usar PWA');
// }

if( navigator.serviceWorker) {
    console.log('podemos utilizar SW');

    navigator.serviceWorker.register('/sw.js').then( reg => {
        setTimeout( () => {
            reg.sync.register('posteo-gatitos');
            console.log('Se enviaron fotos de gatitos al server');
        }, 1000);

        Notification.requestPermission().then(result => {
            console.log('resultado de permiso de notificacion');
            reg.showNotification('Hola mundo!');
        });
    });

}

if ( window.SyncManager ) {

}

fetch('https://reqres.in/api/users').then(resp => resp.text()).then(console.log);