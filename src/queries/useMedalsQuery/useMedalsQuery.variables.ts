import { EContinent } from '@home/_components/Continent/continent.enums';

export const defaultMedalsQueryResult = {
	[EContinent.europe]: { goldAmount: 61, silverAmount: 62, bronzeAmount: 70, totalAmount: 201 },
	[EContinent.africa]: { goldAmount: 2, silverAmount: 3, bronzeAmount: 3, totalAmount: 8 },
	[EContinent.america]: { goldAmount: 22, silverAmount: 35, bronzeAmount: 40, totalAmount: 97 },
	[EContinent.asia]: { goldAmount: 45, silverAmount: 34, bronzeAmount: 40, totalAmount: 119 },
	[EContinent.oceania]: { goldAmount: 14, silverAmount: 13, bronzeAmount: 8, totalAmount: 35 }
};
