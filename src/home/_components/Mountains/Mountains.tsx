import { FC, useEffect, useState } from 'react';
import { StyledMainMountains, StyledMountainsContainer, StyledSmallMountains } from './Mountains.styles';

const distance = {
	full: 8,
	small1: 3,
	small2: 6,
	small3: 4
};

function exponentialTransform(offset: { x: number; y: number }, distance: number) {
	const transformX = Math.sign(offset.x) * Math.pow(Math.abs(offset.x), 1 / distance);
	const transformY = Math.sign(offset.y) * Math.pow(Math.abs(offset.y), 1 / distance);
	return {
		transform: `translate(${transformX / 4}px, ${transformY / 8}px)`
	};
}

export const Mountains: FC = () => {
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event: MouseEvent) => {
		const x = window.innerWidth / 2 - event.clientX;
		const y = window.innerHeight / 2 - event.clientY;
		setOffset({ x, y });
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<StyledMountainsContainer>
			<StyledMainMountains
				src='/mountains/mountains-full.webp'
				alt='Mountains'
				draggable={false}
				style={exponentialTransform(offset, distance.full)}
			/>

			<StyledSmallMountains
				src='/mountains/mountains-small-1.webp'
				alt='Mountains'
				draggable={false}
				className='mountains-small-1'
				style={exponentialTransform(offset, distance.small1)}
			/>
			<StyledSmallMountains
				src='/mountains/mountains-small-2.webp'
				alt='Mountains'
				draggable={false}
				className='mountains-small-2'
				style={exponentialTransform(offset, distance.small2)}
			/>
			<StyledSmallMountains
				src='/mountains/mountains-small-3.webp'
				alt='Mountains'
				draggable={false}
				className='mountains-small-3'
				style={exponentialTransform(offset, distance.small3)}
			/>
		</StyledMountainsContainer>
	);
};
