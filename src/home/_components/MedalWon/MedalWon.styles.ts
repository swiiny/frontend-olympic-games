import styled, { css } from 'styled-components';

export const StyledMedalWonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	flex-shrink: 0;

	gap: 4px;
`;

export const StyledMedalIcon = styled.div<{ type: 'gold' | 'silver' | 'bronze' }>(
	({ theme, type }) => css`
		width: 16px;
		height: 16px;

		border-radius: 50%;

		background: ${theme.colors.gradient[type]};

		box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2) inset;

		transform: rotate(-30deg);
	`
);

export const StyledMedalAmount = styled.p<{ type: 'gold' | 'silver' | 'bronze' }>(
	({ theme, type }) => css`
		width: 40px;

		background-image: ${theme.colors.gradient[type]};

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		color: transparent;
		text-shadow: 1px 2px 1px rgba(255, 255, 255, 0.15);
	`
);
