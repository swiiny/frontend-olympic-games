import { FC } from 'react';
import useMedalsQuery from 'src/queries/useMedalsQuery';
import MedalWon from '../MedalWon';
import { EContinent } from './continent.enums';
import {
	StyledContinentContainer,
	StyledContinentHeader,
	StyledContinentLabel,
	StyledMedalWonWrapper,
	StyledTotalMedalWon
} from './Continent.styles';
import { continentMap } from './Continent.variables';

export const Continent: FC<{
	type: EContinent;
}> = ({ type }) => {
	const { data } = useMedalsQuery();

	const { goldAmount, silverAmount, bronzeAmount, totalAmount } = data[type];

	return (
		<StyledContinentContainer style={continentMap[type].style}>
			<StyledContinentHeader>
				<StyledContinentLabel color={continentMap[type].color}>{continentMap[type].label}</StyledContinentLabel>
				<StyledTotalMedalWon className='number' color={continentMap[type].color}>
					{totalAmount}
				</StyledTotalMedalWon>
			</StyledContinentHeader>

			<StyledMedalWonWrapper>
				<MedalWon type='gold' amount={goldAmount} />
				<MedalWon type='silver' amount={silverAmount} />
				<MedalWon type='bronze' amount={bronzeAmount} />
			</StyledMedalWonWrapper>
		</StyledContinentContainer>
	);
};
