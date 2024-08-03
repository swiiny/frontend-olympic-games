import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			white: string;
			blue: string;
			black: string;
			red: string;
			yellow: string;
			green: string;
			gradient: {
				gold: string;
				silver: string;
				bronze: string;
			};
		};
	}
}
