import { EContinent } from '../Continent/continent.enums';

export const ringRadius = 50;

export const circlesData = [
	{
		cx: 80,
		cy: 70,
		continent: EContinent.europe,
		id: 'circle-blue',
		filter: 'url(#shadow)',
		clipPaths: [{ id: 'clip-blue', cx: 162, cy: 65 }]
	},
	{
		cx: 200,
		cy: 70,
		continent: EContinent.africa,
		id: 'circle-black',
		filter: 'url(#shadow)',
		clipPaths: [
			{ id: 'clip-black-yellow', cx: 152, cy: 135 },
			{ id: 'clip-black-green', cx: 245, cy: 45 }
		]
	},
	{
		cx: 320,
		cy: 70,
		continent: EContinent.america,
		id: 'circle-red',
		filter: 'url(#shadow)',
		clipPaths: [{ id: 'clip-red', cx: 335, cy: 120 }]
	},
	{
		cx: 140,
		cy: 120,
		continent: EContinent.asia,
		id: 'circle-yellow',
		filter: 'url(#shadow)',
		clipPaths: []
	},
	{
		cx: 260,
		cy: 120,
		continent: EContinent.oceania,
		id: 'circle-green',
		filter: 'url(#shadow)',
		clipPaths: []
	}
];
