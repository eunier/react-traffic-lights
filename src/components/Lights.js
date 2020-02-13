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
							? { ...styles.light, ...styles[color] }
							: styles.light
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
	red: {
		backgroundColor: '#ff0000',
		boxShadow: '0 0 20px 5px #ff0000'
	},
	yellow: {
		backgroundColor: '#ffff00',
		boxShadow: '0 0 20px 5px #ffff00'
	},
	green: {
		backgroundColor: '#00ff00',
		boxShadow: '0 0 20px 5px #00ff00'
	}
};

export default Lights;
