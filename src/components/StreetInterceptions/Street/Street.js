import React from 'react';

import StreetLine from './StreetLine/StreetLine';

import car1 from '../../../resources/car1.svg';
import car2 from '../../../resources/car2.svg';
import car3 from '../../../resources/car3.svg';
import car4 from '../../../resources/car4.svg';
import car5 from '../../../resources/car5.svg';
import car6 from '../../../resources/car6.svg';

const Street = props => {
	return (
		<div style={styles.container}>
			<StreetLine
				direction="right"
				cars={[car1, car2, car3]}
				activatedLight={props.activatedLight}
				setActivateLight={props.setActivateLight}
			/>
			<StreetLine
				direction="left"
				cars={[car4, car5, car6]}
				activatedLight={props.activatedLight}
				setActivateLight={props.setActivateLight}
			/>
		</div>
	);
};

const styles = {
	container: {
		width: '100%',
		overflow: 'hidden'
	}
};

export default Street;
