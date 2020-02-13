import React from 'react';

import Lights from './Lights';

const TrafficLight = () => {
	return (
		<>
			<div style={styles.trafficLightContainer}>
				<Lights />
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
		border: '10px solid black',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	carContainer: {
		width: '100%',
		overflow: 'hidden'
	},
	carLine: {
		display: 'flex'
	},
	car: {
		minHeight: '200px',
		minWidth: '200px',
		margin: '0 100px',
		position: 'relative',
		animationDuration: '3s',
		animationIterationCount: 'infinite',
		animationTimingFunction: 'ease-in'
	},
	carLeftToRight: {
		animationName: 'carLeftToRight'
	},
	carRightToLeft: {
		animationName: 'carRightToLeft'
	}
};

export default TrafficLight;
