import { EContinent } from '@home/_components/Continent/continent.enums';

export const defaultMedalsQueryResult = {
	[EContinent.europe]: { goldAmount: 0, silverAmount: 0, bronzeAmount: 0, totalAmount: 0 },
	[EContinent.africa]: { goldAmount: 0, silverAmount: 0, bronzeAmount: 0, totalAmount: 0 },
	[EContinent.america]: { goldAmount: 0, silverAmount: 0, bronzeAmount: 0, totalAmount: 0 },
	[EContinent.asia]: { goldAmount: 0, silverAmount: 0, bronzeAmount: 0, totalAmount: 0 },
	[EContinent.oceania]: { goldAmount: 0, silverAmount: 0, bronzeAmount: 0, totalAmount: 0 }
};
