import React from 'react';
import { contextDarkMode } from './CmpOtros';

class CmpContext extends React.Component {
  render() {
    return (
      <contextDarkMode.Consumer>
        {(darkMode) => {
          let styles = {
            div: {backgroundColor: darkMode ? 'black' : 'white'},
            p: {color: darkMode ? 'white' : 'black'},
          }
          return (
            <div style={styles.div}>
              <p style={styles.p}>Se está recibiendo una prop a través del Context</p>
            </div>
          )
        }}
      </contextDarkMode.Consumer>
    )
  }
}

export default CmpContext;