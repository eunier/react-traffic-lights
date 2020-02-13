import React from 'react';

const Car = props => {
	return (
		<>
			<img
				src={props.car}
				alt="car"
				style={
					props.direction === 'right'
						? { ...styles.car, ...styles.carLeftToRight }
						: { ...styles.car, ...styles.carRightToLeft }
				}
			/>
		</>
	);
};

const styles = {
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

export default Car;