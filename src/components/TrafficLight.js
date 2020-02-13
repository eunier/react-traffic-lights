import React from 'react';

import Lights from './Lights';

import car1 from '../resources/car1.svg';
import car2 from '../resources/car2.svg';
import car3 from '../resources/car3.svg';
import car4 from '../resources/car4.svg';
import car5 from '../resources/car5.svg';
import car6 from '../resources/car6.svg';


const TrafficLight = () => {
	return (
		<>
			<div style={styles.trafficLightContainer}>
				<Lights />
			</div>
			<div style={styles.carContainer}>
				<div style={styles.carLine}>
					<img
						src={car1}
						alt="car"
						style={{ ...styles.car, ...styles.carLeftToRight }}
					/>
					<img
						src={car2}
						alt="car"
						style={{ ...styles.car, ...styles.carLeftToRight }}
					/>
					<img
						src={car3}
						alt="car"
						style={{ ...styles.car, ...styles.carLeftToRight }}
					/>
				</div>

				<div style={styles.carLine}>
					<img
            src={car4}
						alt="car"
						style={{ ...styles.car, ...styles.carRightToLeft }}
					/>
					<img
            src={car5}
						alt="car"
						style={{ ...styles.car, ...styles.carRightToLeft }}
					/>
					<img
            src={car6}
						alt="car"
						style={{ ...styles.car, ...styles.carRightToLeft }}
					/>
				</div>
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
