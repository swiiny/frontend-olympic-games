import styled from 'styled-components';

export const StyledHomePageContainer = styled.div`
	display: flex;

	flex-direction: column;
	align-items: center;

	width: 100%;
	height: 100dvh;
`;

export const StyledTitle = styled.h1`
	margin-top: 60px;
	margin-bottom: 40px;

	font-size: 2.25rem;

	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledOlympicRingsContainer = styled.div`
	position: relative;

	z-index: 1;

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
