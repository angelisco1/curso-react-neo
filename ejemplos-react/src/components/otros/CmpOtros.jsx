import React from 'react';
import CmpRef from './CmpRef';
import CmpContext from './CmpContext';
import CmpFragments from './CmpFragments';

export const contextDarkMode = React.createContext();

class CmpOtros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggleDarkMode}>DarkMode: {this.state.darkMode ? 'Activado' : 'Desactivado'}</button>
        {/* <CmpRef /> */}
        <contextDarkMode.Provider value={this.state.darkMode}>
          <CmpContext />
        </contextDarkMode.Provider>
        {/* <CmpFragments /> */}
      </div>
    )
  }
}

export default CmpOtros;