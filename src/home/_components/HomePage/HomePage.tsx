import { Continent } from '../Continent';
import { EContinent } from '../Continent/continent.enums';
import Mountains from '../Mountains';
import OlympicRings from '../OlympicRings';
import { StyledHomePageContainer, StyledOlympicRingsContainer, StyledSpan, StyledTitle } from './HomePage.styles';

export const HomePage = () => {
	return (
		<StyledHomePageContainer>
			<StyledTitle>
				Médailles Olympiques par continents - <StyledSpan>Paris</StyledSpan> 2024
			</StyledTitle>

			<StyledOlympicRingsContainer>
				<Continent type={EContinent.europe} />
				<Continent type={EContinent.africa} />
				<Continent type={EContinent.america} />
				<Continent type={EContinent.asia} />
				<Continent type={EContinent.oceania} />

				<OlympicRings />
			</StyledOlympicRingsContainer>

			<Mountains />
		</StyledHomePageContainer>
	);
};
