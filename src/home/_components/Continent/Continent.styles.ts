import styled, { css } from 'styled-components';

export const StyledContinentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 204px;
`;

export const StyledContinentHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;

	font-size: 24px;
	font-weight: 700;
`;

export const StyledMedalWonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
`;

export const StyledContinentLabel = styled.p<{ color: TOlympicRingColors }>(
	({ theme, color }) => css`
		font-size: 1.5rem;

		color: transparent;
		background-color: ${theme.colors[color]};

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		text-shadow: 1px 2px 1px rgba(255, 255, 255, 0.2);

		margin-top: 10px;
	`
);

export const StyledTotalMedalWon = styled.p<{ color: TOlympicRingColors }>(
	({ theme, color }) => css`
		font-size: 3.5rem;

		text-align: right;

		color: transparent;
		background-color: ${theme.colors[color]};

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		text-shadow: 1px 2px 1px rgba(255, 255, 255, 0.2);
	`
);
