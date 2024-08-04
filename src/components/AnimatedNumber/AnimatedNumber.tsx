import gsap from 'gsap';
import { CSSProperties, FC, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import TextTransition from '../TextTransition';

export const inheritAll: CSSProperties = {
	color: 'inherit',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	fontWeight: 'inherit',
	fontStyle: 'inherit',
	fontVariant: 'inherit',
	lineHeight: 'inherit',
	textDecoration: 'inherit'
};

export const AnimatedNumber: FC<{ value: number }> = ({ value }) => {
	const numbers = value.toString().split('');
	const [savedValue, setSavedValue] = useState<number | null>(0);

	// This useEffect hook is used to update the savedValue state after a delay of 1 second.
	// This is done to be able to start the counter from the previous value and not from 0.
	useEffect(() => {
		const timeout = setTimeout(() => {
			setSavedValue(value);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [value]);

	//return numbers;
	return (
		<CountUp
			className='number'
			style={inheritAll}
			start={savedValue || 0}
			delay={0}
			duration={2}
			end={value}
			preserveValue
			containerProps={{
				onMouseEnter: (e) => {
					const char = e.target as HTMLElement;

					gsap.to(char, {
						duration: 0.2,
						ease: 'power1.out',
						fontVariationSettings: "'wght' 700" // Target weight
					});
				},
				onMouseLeave: (e) => {
					const char = e.target as HTMLElement;
					gsap.to(char, {
						duration: 0.2,
						ease: 'power1.out',
						fontVariationSettings: "'wght' 400" // Initial weight
					});
				}
			}}
		/>
	);

	return (
		<>
			{numbers.map((number, index) => (
				<TextTransition
					key={index}
					inline
					className='number'
					childrenClassName='number'
					onMouseEnter={(e: MouseEvent) => {
						const char = e.target as HTMLElement;

						gsap.to(char, {
							duration: 0.2,
							ease: 'power1.out',
							fontVariationSettings: "'wght' 700" // Target weight
						});
					}}
					onMouseLeave={(e: MouseEvent) => {
						const char = e.target as HTMLElement;
						gsap.to(char, {
							duration: 0.2,
							ease: 'power1.out',
							fontVariationSettings: "'wght' 400" // Initial weight
						});
					}}
					springConfig={{
						tension: 200,
						friction: 20
						//bounce: 1
					}}
				>
					{number}
				</TextTransition>
			))}
		</>
	);
};
