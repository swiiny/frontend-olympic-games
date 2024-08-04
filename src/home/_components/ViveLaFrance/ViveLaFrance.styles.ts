import styled, { css } from 'styled-components';

export const StyledViveLaFranceContainer = styled.div<{ isVisible: boolean }>(
	({ isVisible }) => css`
		position: fixed;

		inset: -0px;

		z-index: 100;

		pointer-events: none;

		transition: opacity 1s ease-in-out;

		${isVisible ? 'opacity: 1;' : 'opacity: 0;'}
	`
);

export const StyledFireworkContainer = styled.div<{ type: 'mega' | 'blue' | 'red' | 'white' }>(
	({ type }) => css`
		position: absolute;

		bottom: 0px;
		height: 80vh;

		canvas {
			height: 1600px;
		}

		transform: translateX(-50%);

		width: 500px;

		transition: opacity 1s ease-in-out;

		${type === 'mega'
			? css`
					left: 50%;
			  `
			: type === 'blue'
			? css`
					left: 35%;
			  `
			: type === 'red'
			? css`
					left: 65%;
			  `
			: css`
					left: 50%;
			  `}
	`
);
