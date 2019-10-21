

self.addEventListener('install', evento => {
    // Descargar Assets
    // Crear Cache
    console.log('Instalando SW');

    const instalacion = new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1500);
    });
    evento.waitUntil(instalacion);
});


self.addEventListener('activate', evento => {
    //Borrar cache viejo
    console.log('SW activo');
});


self.addEventListener('fetch', evento => {
    // Aplicar estrategias del cache
    console.log('SW fetch: ', evento.request.url);
    if (evento.request.url.includes('https://reqres.in')) {
        const respuesta = new Response(`{ok: false, mensaje: 'jajaja'}`);
        evento.respondWith(respuesta);
    }
    
    if (evento.request.url.includes('style.css')) {
        let respuesta = new Response(`
            body {
                background-color: red;
                color pink;
            }
        `, {headers: {'Content-Type': 'text/css'}});
        evento.respondWith(respuesta);
    }

    if (evento.request.url.includes('.jpg')) {
        evento.respondWith( fetch('img/main-patas-arriba.jpg'));
    }
});


// Recuperamos la conexion a internet
self.addEventListener('sync', evento => {
    console.log('Tenemos conexion!');
    console.log('evento.tag', evento.tag);
});


// Manejar notificaciones push
self.addEventListener('push', evento => {
    console.log('Notificacion recibida!');
});