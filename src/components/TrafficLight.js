import React from 'react';

import Lights from './Lights';

const TrafficLight = () => {
	return (
		<div style={styles.container}>
			<Lights />
		</div>
	);
};

const styles = {
	container: {
		backgroundColor: '#313638',
		height: '300px',
		width: '100px',
		borderRadius: '20px',
		border: '10px solid black',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
};

export default TrafficLight;
