import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import registerServiceWorker from './register-sw';

ReactDOM.render(<Index />, document.getElementById('root'));

// Registramos el SW en la aplicación. De aquí, ir a 'dist/leeme.txt'.
registerServiceWorker();