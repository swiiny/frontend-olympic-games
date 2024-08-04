import { FC, useCallback, useEffect } from 'react';

import gsap from 'gsap';
import AnimatedNumber from 'src/components/AnimatedNumber';
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
	order: number;
}> = ({ type, order }) => {
	const { data } = useMedalsQuery();

	const { goldAmount, silverAmount, bronzeAmount, totalAmount } = data[type];

	//const [isDisplayed, setIsDisplayed] = useState(false);

	const showContinent = useCallback(() => {
		const postInit = { x: 0, y: 0 };

		switch (type) {
			case EContinent.europe:
				postInit.x = -1400;
				postInit.y = -1400;
				break;
			case EContinent.africa:
				postInit.x = 0;
				postInit.y = -1400;
				break;
			case EContinent.america:
				postInit.x = 1400;
				postInit.y = -1400;
				break;
			case EContinent.asia:
				postInit.x = -1000;
				postInit.y = 1400;
				break;
			case EContinent.oceania:
				postInit.x = 1000;
				postInit.y = 1400;
				break;
			default:
				break;
		}

		// animate appearance with gsap
		gsap.fromTo(
			`[data-continent="${type}"]`,
			{
				//opacity: 0,
				scale: 16,
				...postInit
			},
			{
				opacity: 1,
				y: 0,
				x: 0,
				scale: 1,
				duration: 0.5,
				delay: 0.1 * order,
				ease: 'power2.out'
			}
		);
	}, [order, type]);

	useEffect(() => {
		showContinent();
	}, [showContinent]);

	return (
		<StyledContinentContainer className='continents' data-continent={type} style={continentMap[type].style}>
			<StyledContinentHeader>
				<StyledContinentLabel color={continentMap[type].color}>{continentMap[type].label}</StyledContinentLabel>

				<StyledTotalMedalWon className='number' color={continentMap[type].color}>
					<AnimatedNumber value={totalAmount} withAnimation />
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
