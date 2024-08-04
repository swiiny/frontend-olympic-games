import styled, { css } from 'styled-components';

export const StyledOpeningAnimationContainer = styled.div<{ canStartTransition: boolean }>(
	({ theme, canStartTransition }) => css`
		position: fixed;

		inset: -0px;

		z-index: 100;

		// start slowly then accelerate
		//transition: all 5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		// transition: all 5s ease-in;
		/* 
		&::before {
			content: ' ';
			position: absolute;

			right: 0;
			left: 50%;
			top: 0;
			bottom: 0;

			background-color: ${theme.colors.black};

			transform-origin: right;
			perspective: 1000px;

			transition: all 0.8s ease-out;

			${canStartTransition ? `transform: rotateY(90deg) translateZ(-100px);` : ' transform: rotateY(0deg) translateZ(0);'}
		} */
	`
);

export const StyledFireworkContainer = styled.div<{ type: 'mega' | 'blue' | 'red' | 'white'; isHidden: boolean }>(
	({ theme, type, isHidden }) => css`
		position: absolute;

		bottom: 0px;
		height: 80vh;

		canvas {
			height: 1600px;
		}

		pointer-events: none;

		transform: translateX(-50%);

		width: 300px;

		${isHidden ? 'opacity: 0;' : 'opacity: 1;'}
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

export const StyledOlympicRingsContainer = styled.div<{ canStartTransition: boolean }>(
	({ canStartTransition }) => css`
		position: absolute;
		inset: 0;

		display: flex;
		justify-content: center;
		align-items: center;

		& > svg {
			margin-top: -45px;
		}

		transition: all 0.8s ease-out;

		/* ${canStartTransition ? `opacity: 0;` : ''} */
	`
);
