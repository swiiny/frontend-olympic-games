import { EMediaQuery } from '@styes/utils/enums';
import { mq } from '@styes/utils/functions';
import styled, { css } from 'styled-components';
import { EContinent } from './continent.enums';

export const StyledContinentContainer = styled.div<{ type: EContinent; order: number }>(
	({ type, order }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		position: absolute;

		width: auto;

		z-index: 1;

		// is set by gsap
		opacity: 0;

		order: ${order};

		// set the initial position
		${type === EContinent.europe
			? `top: 30px; left: 0px;`
			: type === EContinent.africa
			? `top: 0px; left: 50%; transform: translateX(-50%);`
			: type === EContinent.america
			? `top: 30px; right: 0;`
			: type === EContinent.asia
			? `bottom: 0px; left: 15%;`
			: type === EContinent.oceania
			? `bottom: 0px; right: 15%;`
			: ''}

		${mq(
			EMediaQuery.md,
			`
			${
				type === EContinent.europe
					? `top: 18%; left: 20%;`
					: type === EContinent.africa
					? `top: 10%;`
					: type === EContinent.america
					? `top: 18%; right: 20%;`
					: type === EContinent.asia
					? `bottom: 16%; left: 25%;`
					: type === EContinent.oceania
					? `bottom: 16%; right: 25%;`
					: ''
			}`
		)}

		${mq(
			EMediaQuery.sm,
			`
			position: relative;
			width: 100%;

			top: unset;
			left: unset;
			right: unset;
			bottom: unset;

			transform: unset;

			& + .continents {
				margin-top: 12px;
			}
			`
		)}
	`
);

export const StyledContinentHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;

	gap: 20px;

	${mq(EMediaQuery.sm, `justify-content: space-between;`)}
`;

export const StyledMedalWonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: auto;

	gap: 20px;

	${mq(EMediaQuery.sm, `justify-content: flex-end; width: 100%; gap: 8px;`)}
`;

export const StyledContinentLabel = styled.p<{ color: TOlympicRingColors }>(
	({ theme, color }) => css`
		font-size: 1.5rem;
		font-weight: 700;

		color: transparent;
		background-color: ${theme.colors[color]};

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		text-shadow: 1px 2px 1px rgba(255, 255, 255, 0.2);

		margin-top: 10px;

		${mq(EMediaQuery.md, `font-size: 1rem;`)}
		${mq(EMediaQuery.sm, `font-size: 1.4rem; margin-top: 0px;`)}
	`
);

export const StyledTotalMedalWon = styled.p<{ color: TOlympicRingColors }>(
	({ theme, color }) => css`
		display: flex;
		align-items: center;
		flex-shrink: 0;

		z-index: 1;

		&,
		& span {
			font-size: 3.5rem;

			text-align: right;

			color: transparent;
			background-color: ${theme.colors[color]};

			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;

			text-shadow: 1px 2px 1px rgba(255, 255, 255, 0.2);

			${mq(EMediaQuery.md, `font-size: 2rem;`)}
		}
	`
);
