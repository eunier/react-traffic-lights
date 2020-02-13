import React, { useState } from 'react';

const Lights = () => {
	const [activatedLight, setActivateLight] = useState(0);

	return (
		<>
			{['red', 'yellow', 'green'].map((color, idx) => (
				<div
					key={idx.toString()}
					style={
						activatedLight === idx
							? { ...styles.light, ...styles[`${color}On`] }
							: { ...styles.light, ...styles[`${color}Off`] }
					}
					onClick={() => setActivateLight(idx)}
				></div>
			))}
		</>
	);
};

const styles = {
	light: {
		backgroundColor: '#1b1e1f',
		margin: '10px 0',
		cursor: 'pointer',
		// position: 'relative',
		borderRadius: '50%',
		height: '80px',
		width: '80px'
	},
	redOn: {
		backgroundColor: '#ff0000',
		boxShadow: '0 0 20px 5px #ff0000'
	},
	redOff: {
		backgroundColor: '#4d0000'
	},
	yellowOn: {
		backgroundColor: '#ffff00',
		boxShadow: '0 0 20px 5px #ffff00'
	},
	yellowOff: {
		backgroundColor: '#4d4d00'
	},
	greenOn: {
		backgroundColor: '#00ff00',
		boxShadow: '0 0 20px 5px #00ff00'
	},
	greenOff: {
		backgroundColor: '#004d00'
	}
};

export default Lights;
