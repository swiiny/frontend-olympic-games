import styled, { css } from 'styled-components';

export const StyledHomePageContainer = styled.div`
	display: flex;

	flex-direction: column;
	align-items: center;

	width: 100%;
	height: 100dvh;
`;

export const StyledBackground = styled.div(
	({ theme }) => css`
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		z-index: 2;

		opacity: 0;

		background: ${theme.colors.black};

		pointer-events: none;
	`
);

export const StyledTitle = styled.h1`
	margin-top: 60px;
	margin-bottom: 40px;

	font-size: 2.25rem;

	z-index: 2;

	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledOlympicRingsContainer = styled.div`
	position: relative;

	z-index: 2;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 580px;
	width: 900px;

	padding-top: 140px;
	padding-bottom: 100px;
`;

export const StyledSpan = styled.span`
	all: inherit;
	display: inline-block;

	margin-top: 0;
	margin-bottom: 0;

	transition: all 0.2s ease-in-out;

	&:hover {
		opacity: 0;
		transform: scale(0.9) translateY(-5px);
	}
`;
