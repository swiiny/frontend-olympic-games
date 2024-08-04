import useCustomCursor from '@hooks/useCustomCursor';
import { Continent } from '../Continent';
import { EContinent } from '../Continent/continent.enums';
import Mountains from '../Mountains';
import OlympicRings from '../OlympicRings';
import { StyledHomePageContainer, StyledOlympicRingsContainer, StyledSpan, StyledTitle } from './HomePage.styles';

export const HomePage = () => {
	const { onMouseEnter, onMouseLeave } = useCustomCursor();

	return (
		<>
			{/* <OpeningAnimation /> */}

			<StyledHomePageContainer>
				<StyledTitle>
					Médailles Olympiques par continents -{' '}
					<StyledSpan onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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

					<OlympicRings />
				</StyledOlympicRingsContainer>

				<Mountains />
			</StyledHomePageContainer>
		</>
	);
};
