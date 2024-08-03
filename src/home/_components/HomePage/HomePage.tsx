import useResponsive from '@hooks/useResponsive';
import OlympicRings from '../OlympicRings';
import { StyledHomePageContainer, StyledTitle } from './HomePage.styles';

export const HomePage = () => {
	const { isSmallerThanMd } = useResponsive();

	return (
		<StyledHomePageContainer>
			<StyledTitle>Médailles Olympiques par continents - Paris 2024</StyledTitle>
			<OlympicRings />
		</StyledHomePageContainer>
	);
};
