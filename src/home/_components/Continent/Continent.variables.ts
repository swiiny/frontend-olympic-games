import { EContinent } from './continent.enums';

export const continentMap: {
	[key in EContinent]: {
		label: string;
		color: TOlympicRingColors;
	};
} = {
	[EContinent.europe]: {
		label: 'Europe',
		color: 'blue'
	},
	[EContinent.africa]: {
		label: 'Afrique',
		color: 'black'
	},
	[EContinent.america]: {
		label: 'Amérique',
		color: 'red'
	},
	[EContinent.asia]: {
		label: 'Asie',
		color: 'yellow'
	},
	[EContinent.oceania]: {
		label: 'Océanie',
		color: 'green'
	}
};
