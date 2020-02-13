import React from 'react';

import Car from './Car';

const StreetLine = props => {
	return (
		<div style={styles.streetLine}>
			{props.cars.map((car, idx) => (
				<Car key={idx} car={car} direction={props.direction} />
			))}
		</div>
	);
};

const styles = {
	streetLine: {
		display: 'flex'
	}
};

export default StreetLine;
