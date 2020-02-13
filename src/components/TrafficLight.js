import React from 'react';

const TrafficLight = () => {
	return (
		<div>
			<div style={styles.container}>
				<div style={{ ...styles.light, ...styles.lightRed }}></div>
				<div style={{ ...styles.light, ...styles.lightYellow }}></div>
				<div style={{ ...styles.light, ...styles.lightGreen }}></div>
			</div>
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
	},
	light: {
		backgroundColor: '#1b1e1f',
		margin: '10px 0',
		// position: 'relative',
		borderRadius: '50%',
		height: '70px',
		width: '70px'
	},
	lightRed: {
    backgroundColor: '#ff0000',
    boxShadow: '0 0 20px 5px #ff0000'
	},
	lightYellow: {
    backgroundColor: '#ffff00',
    boxShadow: '0 0 20px 5px #ffff00'
	},
	lightGreen: {
		backgroundColor: '#00ff00',
		boxShadow: '0 0 20px 5px #00ff00'
	}
};

export default TrafficLight;
