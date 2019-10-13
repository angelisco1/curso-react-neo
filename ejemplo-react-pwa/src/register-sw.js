const URL_SW = './service-worker.js'

// Función que registra un SW, es decir, le indica donde se encuentra el SW para que se empiece a ejecutar.
export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(URL_SW)
      .then(function() {
        console.log('SW registrado');
      })
      .catch(function(err) {
        console.log(err);
      })
  } else {
    console.log('El navegador no soporta SW.')
  }
}