import { FC } from 'react';
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
	goldAmount: number;
	silverAmount: number;
	bronzeAmount: number;
}> = ({ type, goldAmount, silverAmount, bronzeAmount }) => {
	return (
		<StyledContinentContainer>
			<StyledContinentHeader>
				<StyledContinentLabel color={continentMap[type].color}>{continentMap[type].label}</StyledContinentLabel>
				<StyledTotalMedalWon className='number' color={continentMap[type].color}>
					{goldAmount + silverAmount + bronzeAmount}
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
