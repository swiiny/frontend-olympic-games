import styled from 'styled-components';

export const StyledMountainsContainer = styled.div`
	position: fixed;

	z-index: 0;

	user-select: none;
	pointer-events: none;

	bottom: -50px;
	left: 0;
	right: 0;

	height: auto;

	opacity: 0.4;

	&::before {
		content: ' ';
		position: absolute;
		top: 0;
		height: 100%;
		left: 0;
		right: 0;
		z-index: 2;

		background: linear-gradient(0deg, #ffffff00 0%, #ffffff 100%);
	}

	& img {
		transition: transform 0.2s linear;
	}
`;

// og width = 4858px
export const StyledMainMountains = styled.img`
	width: 100%;
	height: auto;
`;

export const StyledSmallMountains = styled.img`
	position: absolute;

	height: auto;

	bottom: 4px;

	//filter: drop-shadow(6px 0px 2px rgba(0, 0, 0, 0.11));

	// original mountains small 1 width 742px
	&.mountains-small-1 {
		aspect-ratio: 742 / 498;
		width: calc((742 / 4858) * 102%);
		left: calc(32% - 2px);

		pointer-events: all;

		z-index: 2;

		cursor: grab;

		&:active {
			cursor: grabbing;
		}
	}

	// original mountains small 2 width 558px
	&.mountains-small-2 {
		aspect-ratio: 558 / 672;
		width: calc((558 / 4858) * 102%);
		left: calc(49% - 5px);
	}

	// original mountains small 3 width 1350px
	&.mountains-small-3 {
		aspect-ratio: 1350 / 324;
		width: calc((1350 / 4858) * 102%);
		right: 0px;
	}
`;

export const StylesMadeInSwitzerland = styled.img`
	position: absolute;

	z-index: 1;

	aspect-ratio: 81 / 43;
	width: calc((488 / 4858) * 100%);
	left: calc(33%);

	bottom: 60px;
`;
