import styled, { css } from 'styled-components';

export const StyledOpeningAnimationContainer = styled.div<{ canStartTransition: boolean }>(
	({ theme, canStartTransition }) => css`
		position: fixed;

		inset: -0px;

		z-index: 100;

		// start slowly then accelerate
		//transition: all 5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		// transition: all 5s ease-in;
	`
);

export const StyledWrapper = styled.div<{ canStartTransition: boolean }>(
	({ theme, canStartTransition }) => css`
		height: 100%;
		width: 100%;
		overflow-y: hidden;

		background-color: ${theme.colors.black};

    faire ça avec gsap pour des raisons de perfs
		transition: all 0.8s linear;
		${canStartTransition ? `max-height: 0%; transform: translateY(50vh);` : 'max-height: 100%;'}
	`
);

export const StyledFireworkContainer = styled.div<{ type: 'mega' | 'blue' | 'red' | 'white'; isHidden: boolean }>(
	({ theme, type, isHidden }) => css`
		position: absolute;

		bottom: 0px;
		height: 80vh;

		canvas {
			height: 1200px;
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
					left: 40%;
			  `
			: type === 'red'
			? css`
					left: 60%;
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

		// start slowly then accelerate
		// transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

		/* ${canStartTransition ? `transform: scale(0.95);` : ''} */
	`
);
