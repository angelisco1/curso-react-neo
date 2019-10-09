import React from 'react';

const Loader = () => {
  return (
    <div style={styles.divStyle}>
      <p style={styles.pStyle}>Loading...</p>
    </div>
  )
}

const styles = {
  divStyle: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25px'
  }
}

export default Loader;