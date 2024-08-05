import { FC, MouseEvent, useCallback, useState } from 'react';
import AnimatedNumber from 'src/components/AnimatedNumber';
import { StyledMedalAmount, StyledMedalIcon, StyledMedalWonContainer } from './MedalWon.styles';

export const MedalWon: FC<{ type: 'gold' | 'silver' | 'bronze'; amount: number }> = ({ type, amount }) => {
	const [angle, setAngle] = useState(0);

	const onMouseMove = useCallback((e: MouseEvent) => {
		const element = e.target as HTMLElement | null;

		if (!element) return;

		const rect = element.getBoundingClientRect();
		const elementCenterX = rect.left + rect.width / 2;
		const elementCenterY = rect.top + rect.height / 2;

		const deltaX = e.clientX - elementCenterX;
		const deltaY = e.clientY - elementCenterY;

		const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
		setAngle(newAngle);
	}, []);

	return (
		<StyledMedalWonContainer>
			<StyledMedalIcon type={type} angle={angle}>
				<span onMouseMove={onMouseMove} />
			</StyledMedalIcon>

			<StyledMedalAmount className='number' type={type}>
				<AnimatedNumber value={amount} />
			</StyledMedalAmount>
		</StyledMedalWonContainer>
	);
};
