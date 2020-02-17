import React from 'react';

import Car from './Car';

const StreetLine = props => {
  return (
    <div style={styles.container}>
      {props.cars.map((car, idx) => (
        <Car
          key={idx}
          car={car}
          direction={props.direction}
          activatedLight={props.activatedLight}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex'
  }
};

export default StreetLine;
