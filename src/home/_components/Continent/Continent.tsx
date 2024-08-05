import { FC, useCallback, useEffect } from 'react';

import useResponsive from '@hooks/useResponsive';
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
	const { isSmallerThanSm } = useResponsive();
	const { data } = useMedalsQuery();

	const { goldAmount, silverAmount, bronzeAmount, totalAmount } = data[type];

	const showContinent = useCallback(() => {
		const postInit = { x: 0, y: 0 };

		if (isSmallerThanSm) {
			switch (type) {
				case EContinent.europe:
					postInit.x = 0;
					postInit.y = 600;
					break;
				case EContinent.africa:
					postInit.x = 0;
					postInit.y = 600;
					break;
				case EContinent.america:
					postInit.x = 0;
					postInit.y = 600;
					break;
				case EContinent.asia:
					postInit.x = 0;
					postInit.y = 600;
					break;
				case EContinent.oceania:
					postInit.x = 0;
					postInit.y = 600;
					break;
				default:
					break;
			}
		} else {
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
		}

		// animate appearance with gsap
		gsap.fromTo(
			`[data-continent="${type}"]`,
			{
				scale: isSmallerThanSm ? 1 : 16,
				...postInit
			},
			{
				opacity: 1,
				y: 0,
				x: 0,
				scale: 1,
				duration: 0.5,
				delay: 0.1 * order,
				ease: 'power2.out',
				onComplete: () => {
					// remove style property transform
					gsap.set(`[data-continent="${type}"]`, { clearProps: 'transform' });
				}
			}
		);
	}, [order, type, isSmallerThanSm]);

	useEffect(() => {
		showContinent();
	}, [showContinent]);

	return (
		<StyledContinentContainer className='continents' type={type} data-continent={type} order={order}>
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
