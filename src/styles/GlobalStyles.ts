import { createGlobalStyle, css, DefaultTheme } from 'styled-components';
import { EMediaQuery } from './utils/enums';
import { mq } from './utils/functions';

const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>(
	({ theme }) => css`
		* {
			box-sizing: border-box;

			// disable globally tap highlight on mobile devices
			-webkit-tap-highlight-color: transparent;
		}
		*::before {
			box-sizing: border-box;
		}
		*::after {
			box-sizing: border-box;
		}

		body {
			${(p) => css`
				margin: 0 auto;

				max-width: ${EMediaQuery.xl};
				padding: 0 20px;

				${mq(EMediaQuery.md, 'padding: 0;')}

				min-height: 100dvh;
				background: ${p.theme.colors.white};

				overflow: hidden;
			`}
		}

		html {
			height: 100%;
			overflow: hidden;
		}
	`
);

export default GlobalStyles;
