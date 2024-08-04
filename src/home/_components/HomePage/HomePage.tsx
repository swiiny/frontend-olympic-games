import { useCallback } from 'react';
import { Continent } from '../Continent';
import { EContinent } from '../Continent/continent.enums';
import Mountains from '../Mountains';
import OlympicRings from '../OlympicRings';
import { StyledHomePageContainer, StyledOlympicRingsContainer, StyledSpan, StyledTitle } from './HomePage.styles';

const useCustomCursor = () => {
	// Function to update the position of the custom cursor
	const updateCursorPosition = (event: MouseEvent) => {
		const customCursor = document.querySelector('.custom-cursor') as HTMLElement;
		customCursor.style.left = `${event.pageX}px`;
		customCursor.style.top = `${event.pageY}px`;
	};

	const onMouseEnter = useCallback(() => {
		const customCursor = document.querySelector('.custom-cursor') as HTMLElement;
		customCursor.style.opacity = '1';

		// hide the original cursor
		const body = document.querySelector('body') as HTMLElement;
		body.style.cursor = 'none';

		document.addEventListener('mousemove', updateCursorPosition);
	}, []);

	const onMouseLeave = useCallback(() => {
		const customCursor = document.querySelector('.custom-cursor') as HTMLElement;
		customCursor.style.opacity = '0';

		// show the original cursor
		const body = document.querySelector('body') as HTMLElement;
		body.style.cursor = 'auto';

		document.removeEventListener('mousemove', updateCursorPosition);
	}, []);

	return {
		onMouseEnter,
		onMouseLeave
	};
};

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
