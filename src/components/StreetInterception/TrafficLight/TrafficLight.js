import React from 'react';

import Lights from './Lights';

const TrafficLight = props => {
  return (
    <>
      <div style={styles.container}>
        <Lights
          activatedLight={props.activatedLight}
          setActivatedLight={props.setActivatedLight}
        />
      </div>
    </>
  );
};

const styles = {
  container: {
    backgroundColor: '#313638',
    height: '300px',
    width: '100px',
    borderRadius: '20px',
    marginTop: '20px',
    border: '10px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

export default TrafficLight;
