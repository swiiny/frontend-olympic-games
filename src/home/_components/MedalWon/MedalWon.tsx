import { FC } from 'react';
import { StyledMedalAmount, StyledMedalIcon, StyledMedalWonContainer } from './MedalWon.styles';

export const MedalWon: FC<{ type: 'gold' | 'silver' | 'bronze'; amount: number }> = ({ type, amount }) => {
	return (
		<StyledMedalWonContainer>
			<StyledMedalIcon type={type} />
			<StyledMedalAmount className='number' type={type}>
				{amount}
			</StyledMedalAmount>
		</StyledMedalWonContainer>
	);
};
