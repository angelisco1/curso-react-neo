import React from 'react';
import ReactDOM from 'react-dom';
import CmpIntroduccion from './components/introduccion/CmpIntroduccion';
import CmpCicloDeVida from './components/ciclo-de-vida/CmpCicloDeVida';
import CmpLayout from './components/layouts/CmpLayout';

const App = () => (
  <div>
    {/* <h1>Hola mundo!</h1>
    <p>Un parrafo</p> */}
    {/* <CmpIntroduccion /> */}
    {/* <CmpCicloDeVida /> */}
    <CmpLayout />
  </div>
)

// React.createElement("div", null, [
//   React.createElement("h1", null, "Hola mundo"),
//   React.createElement("p", null, "Un parrafo"),
// ])


ReactDOM.render(<App />, document.getElementById('root'));