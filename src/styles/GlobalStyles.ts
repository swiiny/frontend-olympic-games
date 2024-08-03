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

		.martian-mono,
		p.number,
		p .number,
		p .number span,
		p span.number,
		.number {
			font-family: 'Martian Mono', monospace;
			font-optical-sizing: auto;

			font-style: normal;
			font-variation-settings: 'wdth' 400;

			font-weight: 100 800;
		}

		svg {
			transform-style: preserve-3d;
			perspective: 800px;
		}

		.circle {
			transform-origin: center;
			will-change: transform;
		}
	`
);

export default GlobalStyles;
