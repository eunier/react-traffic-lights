import React from 'react';

import Lights from './Lights';

const TrafficLight = props => {
	return (
		<>
			<div style={styles.trafficLightContainer}>
				<Lights
					activatedLight={props.activatedLight}
					setActivateLight={props.setActivateLight}
				/>
			</div>
		</>
	);
};

const styles = {
	trafficLightContainer: {
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
