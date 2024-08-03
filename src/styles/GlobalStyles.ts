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

		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		span,
		a {
			margin: 0;

			font-family: 'PT Sans', sans-serif;
			font-weight: 400;
			font-style: normal;
		}

		p,
		span,
		a {
			font-size: 1rem;
		}

		.pt-sans-regular {
			font-family: 'PT Sans', sans-serif;
			font-weight: 400;
			font-style: normal;
		}

		.pt-sans-bold {
			font-family: 'PT Sans', sans-serif;
			font-weight: 700;
			font-style: normal;
		}

		.pt-sans-regular-italic {
			font-family: 'PT Sans', sans-serif;
			font-weight: 400;
			font-style: italic;
		}

		.pt-sans-bold-italic {
			font-family: 'PT Sans', sans-serif;
			font-weight: 700;
			font-style: italic;
		}

		.martian-mono,
		.number {
			font-family: 'Martian Mono', monospace;
			font-optical-sizing: auto;
			font-weight: 400;
			font-style: normal;
			font-variation-settings: 'wdth' 100;
		}
	`
);

export default GlobalStyles;
