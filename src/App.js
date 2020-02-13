import React from 'react';
import './App.css';

import TrafficLight from './components/TrafficLight';

function App() {
	return (
		<div style={styles.container}>
			<TrafficLight />
		</div>
	);
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#3685b5',
		minHeight: '100vh'
	}
};

export default App;
