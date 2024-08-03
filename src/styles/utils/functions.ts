import { EMediaQuery } from './enums';

export const mq = (mediaQuery: EMediaQuery | string, children: string, minOrMax = 'max') => {
	return `@media only screen and (${minOrMax}-width: ${mediaQuery}) {
		${children}
	}`;
};
