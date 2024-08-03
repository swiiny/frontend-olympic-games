import { EContinent } from '@home/_components/Continent/continent.enums';

export const defaultMedalsQueryResult = {
	[EContinent.europe]: { goldAmount: 56, silverAmount: 57, bronzeAmount: 70, totalAmount: 183 },
	[EContinent.africa]: { goldAmount: 2, silverAmount: 3, bronzeAmount: 3, totalAmount: 8 },
	[EContinent.america]: { goldAmount: 18, silverAmount: 29, bronzeAmount: 32, totalAmount: 79 },
	[EContinent.asia]: { goldAmount: 41, silverAmount: 30, bronzeAmount: 37, totalAmount: 108 },
	[EContinent.oceania]: { goldAmount: 14, silverAmount: 12, bronzeAmount: 6, totalAmount: 32 }
};
