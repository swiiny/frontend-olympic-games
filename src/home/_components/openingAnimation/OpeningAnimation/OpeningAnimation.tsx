import Fireworks from '@fireworks-js/react';
import OlympicRings from '@home/_components/OlympicRings';
import { FC, useEffect, useState } from 'react';
import {
	StyledFireworkContainer,
	StyledOlympicRingsContainer,
	StyledOpeningAnimationContainer
} from './OpeningAnimation.styles';

export const OpeningAnimation: FC = () => {
	const [isWaitingToStart, setIsWaitingToStart] = useState(true);
	const [isIntroFinished, setIsIntroFinished] = useState(false);

	/* 	useEffect(() => {
		setTimeout(() => {
			setIsWaitingToStart(false);
		}, 4000);

		setTimeout(() => {
			setIsIntroFinished(true);
		}, 5500);
	}, []); */

	useEffect(() => {
		if (!isWaitingToStart) return;

		const timeout = setTimeout(() => {
			setIsWaitingToStart(false);
		}, 500);

		return () => clearTimeout(timeout);
	}, [isWaitingToStart]);

	/* useEffect(() => {
		if (isWaitingToStart) return;

		const timeout = setTimeout(() => {
			setIsWaitingToStart(true);
		}, 2000);

		return () => clearTimeout(timeout);
	}, [isWaitingToStart]); */

	if (isIntroFinished) {
		return null;
	}

	return (
		<StyledOpeningAnimationContainer canStartTransition={!isWaitingToStart}>
			{/* <StyledWrapper /> */}

			<StyledOlympicRingsContainer canStartTransition={!isWaitingToStart}>
				<OlympicRings isOpeningPage />
			</StyledOlympicRingsContainer>

			<StyledFireworkContainer type='blue' isHidden={!isWaitingToStart}>
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

			<StyledFireworkContainer type='white' isHidden={!isWaitingToStart}>
				<Fireworks
					options={{
						hue: { min: 150, max: 150 },
						// particles: 50,
						brightness: { min: 100, max: 100 },
						intensity: 8,
						traceSpeed: 1,
						delay: { min: 8, max: 30 },
						lineWidth: { explosion: { min: 4, max: 4 } }
					}}
				/>
			</StyledFireworkContainer>
			<StyledFireworkContainer type='red' isHidden={!isWaitingToStart}>
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
		</StyledOpeningAnimationContainer>
	);
};
