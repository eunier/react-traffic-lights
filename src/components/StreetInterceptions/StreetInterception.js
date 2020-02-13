import React, { useState } from 'react';

import TrafficLight from './TrafficLight/TrafficLight';
import Street from './Street/Street';

const StreetInterception = () => {
	const [activatedLight, setActivateLight] = useState(2);

	return (
		<div style={styles.container}>
			<TrafficLight
				activatedLight={activatedLight}
				setActivateLight={setActivateLight}
			/>
			<Street
				activatedLight={activatedLight}
				setActivateLight={setActivateLight}
			/>
		</div>
	);
};

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		// justifyContent: 'center',
		backgroundColor: '#3685b5',
		minHeight: '100vh'
		// paddingTop: '20px'
	}
};

export default StreetInterception;
