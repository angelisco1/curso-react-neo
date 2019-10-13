const NOMBRE_CACHE_ESTATICA = 'estatica' + 1;
const NOMBRE_CACHE_DINAMICA = 'dinamica' + 1;
const ARCHIVOS_CACHEADOS = [
  '/',
  '/index.html',
  '/bundle.js',
  '/manifest.json',
  '/images/logo192.png',
  '/images/logo512.png',
];

// Función que cachea los archivos estáticos cuando se instala el SW.
function cachearArchivosEstaticos(caches) {
  // Busca en las cachés una con el nombre NOMBRE_CACHE_ESTATICA y si es posible la abre y nos la devuelve en la promesa.
  caches.open(NOMBRE_CACHE_ESTATICA)
    .then((cache) => {
      console.log('Cache estatica')

      // Añade todos los archivos del array a la caché.
      cache.addAll(ARCHIVOS_CACHEADOS)
    })
}

// Detectamos cuando se está instalando el SW en nuestra aplicación, y es en este momento que le vamos a decir que no se vaya al estado de terminated, hasta que se haya descargado y cacheado los archivos estáticos.
self.addEventListener('install', (event) => {
  console.log('Instalando SW...');
  event.waitUntil(cachearArchivosEstaticos(caches))
})

// Función que elimina las cachés que se han quedado desactualizadas (porque se ha cambiado algún archivo de los que se querían tener cacheados)
function eliminarCachesAntiguas(listaNombresCaches) {
  // Solo se hace el retur cuando hayan finalizado todas las promesas. En este caso de la lista de nombres de todas las cachés que tenemos se van pasando de una en una para comprobar si el nombre no es uno de los que tenemos definidos en esas dos constantes. Si no lo es entonces se elimina la caché.
  return Promise.all(listaNombresCaches.map((nombreCache) => {
    if(![NOMBRE_CACHE_DINAMICA, NOMBRE_CACHE_ESTATICA].includes(nombreCache)) {
      console.log(`Eliminando cache ${nombreCache}...`)
      // De todas las cachés elimina la que tiene el nombre dado.
      return caches.delete(nombreCache);
    }
  }))
}

// Cuando se actualiza el SW, es decir, se cambia el antiguo por el nuevo (tienen que estar cerradas todas las pestañas donde se esté ejecutando la app), vamos a cocger el nombre de todas las cachés para ver si hay que eliminar alguna.Le indicamos
self.addEventListener('activate', (event) => {
  console.log('Activando SW...')
  // Le indicamos que espere a que se resuelvan todas las promesas antes de que se vaya al estado de terminated.
  event.waitUntil(
    caches.keys()
      .then(eliminarCachesAntiguas)
  )
  // Con esta linea le indicamos que cargue la nueva versión del SW sin que los clientes tengan que actualizar la página para que se cargue.
  return self.clients.claim();
})

// Función que comprueba si tenemos conexión y la petición que se ha realizado contiene '/jokes/random/'.
function urlFrasesOnline(url) {
  esUrlFrases = url.match(new RegExp('/jokes/random/'))
  estamosOnline = navigator.onLine;
  return esUrlFrases && estamosOnline;
}

// Función que actualiza la caché dinámica. Aquí vamos a ir cacheando las peticiones que se traen datos normalmente para tener siempre la última versión de estos para que en el caso de que nos quedemos sin conexión a internet podamos seguir usando la app con los últimos datos que habíamos obtenido.
function actualizaCacheDinamica(caches, request, response) {
  // Accedemos a la caché con el nombre de 'NOMBRE_CACHE_DINAMICA'
  return caches.open(NOMBRE_CACHE_DINAMICA)
    .then(function(cache) {
      console.log('Actualizando cache...')
      // Modificamos la caché, asignandole a la URL a la que se ha hecho la nueva petición la nueva respuesta recibida. Se tiene que clonar porque es un Stream de datos, y una vez que se usa ya no podemos volver a usarlo, y en este caso se tiene que guardar y además devolver para que le llegue al cliente.
      cache.put(request.url, response.clone());
      return response;
    })
}

// Función que devuelve la respuesta esperada a nuestra aplicación.
function getResponse(caches, event) {
  return (resp) => {
    // Comprobamos si tenemos la respuesta cacheada y no tiene que cumplirse lo que se indica en la función de 'urlFrasesOnline'
    if (resp && !urlFrasesOnline(event.request.url)) {
      return resp;
    } else {
      // Si no pasa por el id, realizamos al petición, y vamos a actualizar la caché dinámica.
      return fetch(event.request)
      .then(function(resp) {
        return actualizaCacheDinamica(caches, event.request, resp);
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  }
}

// Se detecta que se ha hecho una petición para descargar algo. Aquí es donde le indicaremos si tiene que hacer la petición o tiene que devolver la respuesta que se había cacheado para dicha petición.
self.addEventListener('fetch', function(event) {
  console.log('Fetch detectado...');
  event.respondWith(
    // Mira si en alguna de las cachés ya tenemos guardada la respuesta para la petición que se está realizando.
    caches.match(event.request)
      .then(getResponse(caches, event))
  )
})