
self.addEventListener('fetch', evento => {
    
    if (evento.request.url.includes('style.css')) {
        let respuesta = new Response(`
            body {
                background-color: red;
                color:pink;
            }
        `, {headers: {'Content-Type': 'text/css'}});
        evento.respondWith(respuesta);
    }
});