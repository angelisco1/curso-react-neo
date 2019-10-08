import React from 'react';
import ReactDOM from 'react-dom';
import CmpIntroduccion from './components/introduccion/CmpIntroduccion';

const App = () => (
  <div>
    {/* <h1>Hola mundo!</h1>
    <p>Un parrafo</p> */}
    <CmpIntroduccion />
  </div>
)

// React.createElement("div", null, [
//   React.createElement("h1", null, "Hola mundo"),
//   React.createElement("p", null, "Un parrafo"),
// ])


ReactDOM.render(<App />, document.getElementById('root'));