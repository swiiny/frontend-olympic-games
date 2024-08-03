import { CSSProperties } from 'react';
import { EContinent } from './continent.enums';

export const continentMap: {
	[key in EContinent]: {
		label: string;
		color: TOlympicRingColors;
		style: CSSProperties;
	};
} = {
	[EContinent.europe]: {
		label: 'Europe',
		color: 'blue',
		style: {
			top: '30px',
			left: '0px'
		}
	},
	[EContinent.africa]: {
		label: 'Afrique',
		color: 'black',
		style: {
			top: '0px',
			left: '50%',
			transform: 'translateX(-50%)'
		}
	},
	[EContinent.america]: {
		label: 'Amérique',
		color: 'red',
		style: {
			top: '30px',
			right: '0'
		}
	},
	[EContinent.asia]: {
		label: 'Asie',
		color: 'yellow',
		style: {
			bottom: '0px',
			left: '15%'
		}
	},
	[EContinent.oceania]: {
		label: 'Océanie',
		color: 'green',
		style: {
			bottom: '0px',
			right: '15%'
		}
	}
};
