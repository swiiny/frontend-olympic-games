import { EContinent } from '../Continent/continent.enums';

export function getOrder(continent: EContinent) {
	switch (continent) {
		case EContinent.europe:
			return 1;
		case EContinent.africa:
			return 3;
		case EContinent.america:
			return 5;
		case EContinent.asia:
			return 2;
		case EContinent.oceania:
			return 4;
		default:
			return 0;
	}
}
