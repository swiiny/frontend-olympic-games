import { CSSProperties } from 'react';
import { EContinent } from './continent.enums';

export const continentMap: {
	[key in EContinent]: {
		label: string;
		color: TOlympicRingColors;
		style: CSSProperties;
		nations: { name: string; id: string }[];
	};
} = {
	[EContinent.europe]: {
		label: 'europe',
		color: 'blue',
		style: {
			top: '30px',
			left: '0px'
		},
		nations: [
			{ name: 'France', id: 'FRA' },
			{ name: 'Great Britain', id: 'GBR' },
			{ name: 'Italy', id: 'ITA' },
			{ name: 'Netherlands', id: 'NED' },
			{ name: 'Germany', id: 'GER' },
			{ name: 'Romania', id: 'ROU' },
			{ name: 'Ireland', id: 'IRL' },
			{ name: 'Hungary', id: 'HUN' },
			{ name: 'Croatia', id: 'CRO' },
			{ name: 'Belgium', id: 'BEL' },
			{ name: 'Sweden', id: 'SWE' },
			{ name: 'Georgia', id: 'GEO' },
			{ name: 'Switzerland', id: 'SUI' },
			{ name: 'Spain', id: 'ESP' },
			{ name: 'Czechia', id: 'CZE' },
			{ name: 'Serbia', id: 'SRB' },
			{ name: 'Slovenia', id: 'SLO' },
			{ name: 'Greece', id: 'GRE' },
			{ name: 'Poland', id: 'POL' },
			{ name: 'Kosovo', id: 'KOS' },
			{ name: 'Turkiye', id: 'TUR' },
			{ name: 'Ukraine', id: 'UKR' },
			{ name: 'Denmark', id: 'DEN' },
			{ name: 'Moldova', id: 'MDA' },
			{ name: 'Austria', id: 'AUT' },
			{ name: 'Lithuania', id: 'LTU' },
			{ name: 'Portugal', id: 'POR' },
			{ name: 'Slovakia', id: 'SVK' }
		]
	},
	[EContinent.africa]: {
		label: 'Afrique',
		color: 'black',
		style: {
			top: '0px',
			left: '50%',
			transform: 'translateX(-50%)'
		},
		nations: [
			{ name: 'South Africa', id: 'RSA' },
			{ name: 'Uganda', id: 'UGA' },
			{ name: 'Ethiopia', id: 'ETH' },
			{ name: 'Tunisia', id: 'TUN' },
			{ name: 'Egypt', id: 'EGY' }
		]
	},
	[EContinent.america]: {
		label: 'Amérique',
		color: 'red',
		style: {
			top: '30px',
			right: '0'
		},
		nations: [
			{ name: 'United States', id: 'USA' },
			{ name: 'Canada', id: 'CAN' },
			{ name: 'Guatemala', id: 'GUA' },
			{ name: 'Mexico', id: 'MEX' },
			{ name: 'Brazil', id: 'BRA' },
			{ name: 'Argentina', id: 'ARG' },
			{ name: 'Ecuador', id: 'ECU' }
		]
	},
	[EContinent.asia]: {
		label: 'Asie',
		color: 'yellow',
		style: {
			bottom: '0px',
			left: '15%'
		},
		nations: [
			{ name: 'China', id: 'CHN' },
			{ name: 'South Korea', id: 'KOR' },
			{ name: 'Japan', id: 'JPN' },
			{ name: 'Hong Kong', id: 'HKG' },
			{ name: 'Azerbaijan', id: 'AZE' },
			{ name: 'Israel', id: 'ISR' },
			{ name: 'Kazakhstan', id: 'KAZ' },
			{ name: 'Uzbekistan', id: 'UZB' },
			{ name: 'Philippines', id: 'PHI' },
			{ name: 'North Korea', id: 'PRK' },
			{ name: 'Mongolia', id: 'MGL' },
			{ name: 'India', id: 'IND' },
			{ name: 'Chinese Taipei', id: 'TPE' },
			{ name: 'Tajikistan', id: 'TJK' }
		]
	},
	[EContinent.oceania]: {
		label: 'Océanie',
		color: 'green',
		style: {
			bottom: '0px',
			right: '15%'
		},
		nations: [
			{ name: 'Australia', id: 'AUS' },
			{ name: 'New Zealand', id: 'NZL' },
			{ name: 'Fiji', id: 'FIJ' }
		]
	}
};

export const countryIdContinentMap: Record<string, EContinent> = {
	CHN: EContinent.asia,
	KOR: EContinent.asia,
	JPN: EContinent.asia,
	HKG: EContinent.asia,
	AZE: EContinent.asia,
	ISR: EContinent.asia,
	KAZ: EContinent.asia,
	UZB: EContinent.asia,
	PHI: EContinent.asia,
	PRK: EContinent.asia,
	MGL: EContinent.asia,
	IND: EContinent.asia,
	TPE: EContinent.asia,
	TJK: EContinent.asia,
	FRA: EContinent.europe,
	GBR: EContinent.europe,
	ITA: EContinent.europe,
	NED: EContinent.europe,
	GER: EContinent.europe,
	ROU: EContinent.europe,
	IRL: EContinent.europe,
	HUN: EContinent.europe,
	CRO: EContinent.europe,
	BEL: EContinent.europe,
	SWE: EContinent.europe,
	GEO: EContinent.europe,
	SUI: EContinent.europe,
	ESP: EContinent.europe,
	CZE: EContinent.europe,
	SRB: EContinent.europe,
	SLO: EContinent.europe,
	GRE: EContinent.europe,
	POL: EContinent.europe,
	KOS: EContinent.europe,
	TUR: EContinent.europe,
	UKR: EContinent.europe,
	DEN: EContinent.europe,
	MDA: EContinent.europe,
	AUT: EContinent.europe,
	LTU: EContinent.europe,
	POR: EContinent.europe,
	SVK: EContinent.europe,
	AUS: EContinent.oceania,
	NZL: EContinent.oceania,
	FIJ: EContinent.oceania,
	USA: EContinent.america,
	CAN: EContinent.america,
	GUA: EContinent.america,
	MEX: EContinent.america,
	BRA: EContinent.america,
	ARG: EContinent.america,
	ECU: EContinent.america,
	RSA: EContinent.africa,
	UGA: EContinent.africa,
	ETH: EContinent.africa,
	TUN: EContinent.africa,
	EGY: EContinent.africa
};
