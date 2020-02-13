import React, { useState, useEffect } from 'react';

import TrafficLight from './TrafficLight/TrafficLight';
import Street from './Street/Street';

const StreetInterception = () => {
	const [activatedLight, setActivateLight] = useState('green');
	const [trafficLightDirection, setTrafficLightDirection] = useState('down');

	useEffect(() => {
		const interval = setInterval(() => {
			if (activatedLight === 'yellow') {
				if (trafficLightDirection === 'up') {
					setActivateLight('red');
				} else if (trafficLightDirection === 'down') {
					setActivateLight('green');
				}
			} else if (activatedLight === 'green') {
				setTrafficLightDirection('up');
				setActivateLight('yellow');
			} else if (activatedLight === 'red') {
				setTrafficLightDirection('down');
				setActivateLight('yellow');
			}
		}, 3000);

		return () => clearInterval(interval);
	});

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
