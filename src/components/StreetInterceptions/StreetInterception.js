import React from 'react';

import TrafficLight from './TrafficLight/TrafficLight';
import Street from './Street/Street';

const StreetInterception = () => {
	return (
		<div style={styles.container}>
			<TrafficLight />
			<Street />
		</div>
	);
};

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#3685b5',
		minHeight: '100vh'
	}
};

export default StreetInterception;
