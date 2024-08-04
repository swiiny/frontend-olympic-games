import useCustomCursor from '@hooks/useCustomCursor';
import { useEffect, useState } from 'react';
import { Continent } from '../Continent';
import { EContinent } from '../Continent/continent.enums';
import Mountains from '../Mountains';
import OlympicRings from '../OlympicRings';
import ViveLaFrance from '../ViveLaFrance';
import { StyledHomePageContainer, StyledOlympicRingsContainer, StyledSpan, StyledTitle } from './HomePage.styles';

export const HomePage = () => {
	const { onMouseEnter, onMouseLeave } = useCustomCursor();

	const [isParisTheCityOfLight, setIsParisTheCityOfLight] = useState(false);

	useEffect(() => {
		if (!isParisTheCityOfLight) return;

		const timeout = setTimeout(() => {
			setIsParisTheCityOfLight(false);
		}, 10000);

		return () => clearTimeout(timeout);
	}, [isParisTheCityOfLight]);

	return (
		<>
			<ViveLaFrance isActive={isParisTheCityOfLight} />

			<StyledHomePageContainer>
				<StyledTitle>
					Médailles Olympiques par continent -{' '}
					<StyledSpan
						isInteractionEnabled={isParisTheCityOfLight}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						onClick={() => setIsParisTheCityOfLight(true)}
					>
						Paris
					</StyledSpan>{' '}
					2024
				</StyledTitle>

				<StyledOlympicRingsContainer>
					<Continent type={EContinent.europe} order={1} />
					<Continent type={EContinent.africa} order={3} />
					<Continent type={EContinent.asia} order={2} />
					<Continent type={EContinent.oceania} order={4} />
					<Continent type={EContinent.america} order={5} />

					<OlympicRings animateToWhite={isParisTheCityOfLight} />
				</StyledOlympicRingsContainer>

				<Mountains />
			</StyledHomePageContainer>
		</>
	);
};
