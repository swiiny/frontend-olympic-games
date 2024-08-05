import { createGlobalStyle, css } from 'styled-components';
import { EMediaQuery } from './utils/enums';

const GlobalStyles = createGlobalStyle(
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
			margin: 0 auto;

			max-width: ${EMediaQuery.xl};

			min-height: 100dvh;
			background: ${theme.colors.white};

			overflow: hidden;

			cursor: default;
		}

		html {
			height: 100%;
			overflow: hidden;
		}

		h1 {
			margin: 0;

			font-family: 'PT Sans', sans-serif;
			font-style: normal;
		}

		p,
		span,
		a {
			font-size: 1rem;

			margin: 0;

			font-family: 'PT Sans', sans-serif;
			font-style: normal;
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

		p.number,
		.number {
			font-family: 'Azeret Mono', monospace;
			font-optical-sizing: auto;

			font-style: normal;
			font-weight: 100 900;

			font-variation-settings: 'wdth' 400;
		}

		.circle {
			will-change: transform;
		}
	`
);

export default GlobalStyles;
