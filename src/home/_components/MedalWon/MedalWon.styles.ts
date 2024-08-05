import { EMediaQuery } from '@styes/utils/enums';
import { mq } from '@styes/utils/functions';
import styled, { css } from 'styled-components';

export const StyledMedalWonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	flex-shrink: 0;

	gap: 4px;
`;

export const StyledMedalIcon = styled.div<{ type: 'gold' | 'silver' | 'bronze'; angle?: number }>(
	({ theme, type, angle = -30 }) => css`
		width: 16px;
		height: 16px;

		border-radius: 50%;

		background: ${theme.colors.gradient[type]};

		box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2) inset;

		transition: transform 0.15s ease-out;

		transform: ${`rotate(${angle}deg)`};

		${mq(EMediaQuery.md, `width: 12px; height: 12px;`)}
		${mq(EMediaQuery.sm, `margin-left: 12px;`)} // animate a rotation


		& > span {
			position: absolute;
			inset: -33px;

			border-radius: 50%;

			background: transparent;
		}
	`
);

export const StyledMedalAmount = styled.p<{ type: 'gold' | 'silver' | 'bronze' }>(
	({ theme, type }) => css`
		display: flex;
		flex-shrink: 0;
		align-items: center;

		${mq(
			EMediaQuery.sm,
			`
			width: auto; 
			justify-content: flex-end;
		`
		)}

		&,
		& span {
			background-image: ${theme.colors.textGradient[type]};

			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;

			color: transparent;
			text-shadow: 1px 2px 1px rgba(255, 255, 255, 0.15);

			${mq(EMediaQuery.md, `font-size: 0.8rem;`)}
		}
	`
);
