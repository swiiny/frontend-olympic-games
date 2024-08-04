import Fireworks from '@fireworks-js/react';
import gsap from 'gsap';
import { FC, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { StyledFireworkContainer, StyledViveLaFranceContainer } from './ViveLaFrance.styles';

export const ViveLaFrance: FC<{ isActive: boolean }> = ({ isActive }) => {
	const { colors } = useTheme();

	const [debounceIsActive, setDebounceIsActive] = useState(false);

	useEffect(() => {
		if (isActive) {
			const timeout = setTimeout(() => {
				setDebounceIsActive(true);
			}, 10);

			return () => clearTimeout(timeout);
		} else {
			const timeout = setTimeout(() => {
				setDebounceIsActive(false);
			}, 400);

			return () => clearTimeout(timeout);
		}
	}, [isActive]);

	useEffect(() => {
		const continents = document.querySelectorAll('.continents');
		const mountainsContainer = document.querySelector('.mountains-container');
		const h1 = document.querySelector('h1');

		if (!continents || !mountainsContainer || !h1) return;

		if (isActive) {
			// Set the body background color to black
			gsap.to(document.body, { backgroundColor: colors.black, duration: 1, ease: 'power1.inOut' });

			// Hide elements and update their styles
			gsap.to(continents, { opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.1 });
			gsap.to(mountainsContainer, { opacity: 0, duration: 1, ease: 'power1.inOut' });
			gsap.to(h1, { color: colors.white, duration: 1, ease: 'power1.inOut' });
		} else {
			// Reset the body background color, main content, mountains container, and h1
			gsap.to(document.body, { backgroundColor: colors.white, duration: 1, ease: 'power1.inOut' });
			gsap.to(continents, { opacity: 1, duration: 1, ease: 'power1.inOut', stagger: 0.1 });
			gsap.to(mountainsContainer, { opacity: 0.4, duration: 1, ease: 'power1.inOut' });
			gsap.to(h1, { color: colors.black, duration: 1, ease: 'power1.inOut' });
		}
	}, [isActive, colors]);

	if (!isActive && !debounceIsActive) {
		return null;
	}

	return (
		<StyledViveLaFranceContainer isVisible={isActive && debounceIsActive}>
			<StyledFireworkContainer type='blue'>
				<Fireworks
					options={{
						hue: { min: 214, max: 214 },
						// particles: 50,
						intensity: 8,
						traceSpeed: 1,
						delay: { min: 8, max: 30 },
						lineWidth: { explosion: { min: 4, max: 4 } }
					}}
				/>
			</StyledFireworkContainer>

			<StyledFireworkContainer type='white'>
				<Fireworks
					options={{
						hue: { min: 150, max: 150 },
						// particles: 50,
						brightness: { min: 100, max: 100 },
						intensity: 8,
						sound: {
							enabled: true,
							volume: { min: 2, max: 4 },
							files: ['/audio/explosion0.mp3', '/audio/explosion1.mp3', '/audio/explosion2.mp3']
						},
						traceSpeed: 1,
						delay: { min: 8, max: 30 },
						lineWidth: { explosion: { min: 4, max: 4 } }
					}}
				/>
			</StyledFireworkContainer>
			<StyledFireworkContainer type='red'>
				<Fireworks
					options={{
						hue: { min: 360, max: 360 },
						//particles: 50,
						intensity: 8,
						traceSpeed: 1,
						delay: { min: 8, max: 30 },
						lineWidth: { explosion: { min: 4, max: 4 } }
					}}
				/>
			</StyledFireworkContainer>
		</StyledViveLaFranceContainer>
	);
};
