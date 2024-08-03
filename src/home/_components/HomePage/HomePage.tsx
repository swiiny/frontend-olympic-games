import { Continent } from '../Continent';
import { EContinent } from '../Continent/continent.enums';
import Mountains from '../Mountains';
import OlympicRings from '../OlympicRings';
import { StyledHomePageContainer, StyledOlympicRingsContainer, StyledTitle } from './HomePage.styles';

export const HomePage = () => {
	return (
		<StyledHomePageContainer>
			<StyledTitle>Médailles Olympiques par continents - Paris 2024</StyledTitle>

			<StyledOlympicRingsContainer>
				<Continent type={EContinent.europe} goldAmount={136} silverAmount={151} bronzeAmount={154} />
				<Continent type={EContinent.africa} goldAmount={10} silverAmount={18} bronzeAmount={17} />
				<Continent type={EContinent.america} goldAmount={76} silverAmount={60} bronzeAmount={74} />
				<Continent type={EContinent.asia} goldAmount={71} silverAmount={58} bronzeAmount={97} />
				<Continent type={EContinent.oceania} goldAmount={13} silverAmount={20} bronzeAmount={16} />

				<OlympicRings />
			</StyledOlympicRingsContainer>

			<Mountains />
		</StyledHomePageContainer>
	);
};
