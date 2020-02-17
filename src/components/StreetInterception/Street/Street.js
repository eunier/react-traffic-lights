import React from 'react';

import StreetLine from './StreetLine/StreetLine';

import car1 from '../../../assets/car1.svg';
import car2 from '../../../assets/car2.svg';
import car3 from '../../../assets/car3.svg';
import car4 from '../../../assets/car4.svg';
import car5 from '../../../assets/car5.svg';
import car6 from '../../../assets/car6.svg';

const Street = props => {
  return (
    <div style={styles.container}>
      <StreetLine
        direction="right"
        cars={[car1, car2, car3, car1, car2, car3]}
        activatedLight={props.activatedLight}
      />
      <StreetLine
        direction="left"
        cars={[car4, car5, car6, car4, car5, car6]}
        activatedLight={props.activatedLight}
      />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    overflow: 'hidden'
  }
};

export default Street;
