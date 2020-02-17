import React, { useState, useEffect } from 'react';

import TrafficLight from './TrafficLight/TrafficLight';
import Street from './Street/Street';

const StreetInterception = () => {
  const [activatedLight, setActivatedLight] = useState('yellow');
  const [direction, setDirection] = useState('down');

  useEffect(() => {
    const interval = setInterval(() => {
      if (activatedLight === 'yellow') {
        if (direction === 'down') {
          setActivatedLight('green');
        } else if (direction === 'up') {
          setActivatedLight('red');
        }
      } else if (activatedLight === 'green') {
        setDirection('up');
        setActivatedLight('yellow');
      } else if (activatedLight === 'red') {
        setDirection('down');
        setActivatedLight('yellow');
      }
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div style={styles.container}>
      <TrafficLight
        activatedLight={activatedLight}
        setActivatedLight={setActivatedLight}
      />
      <Street activatedLight={activatedLight} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#3685b5',
    minHeight: '100vh'
  }
};

export default StreetInterception;
