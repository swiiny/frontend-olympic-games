import gsap from 'gsap';
import React, { FC, MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import CountUp from 'react-countup';

const inheritTextStyles: React.CSSProperties = {
	color: 'inherit',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	fontWeight: 'inherit',
	fontStyle: 'inherit',
	fontVariant: 'inherit',
	lineHeight: 'inherit',
	textDecoration: 'inherit'
};

export const AnimatedNumber: FC<{ value: number; withAnimation?: boolean }> = ({ value, withAnimation }) => {
	const [savedValue, setSavedValue] = useState<number | null>(0);

	const animationRef = useRef<gsap.core.Tween | null>(null);

	// This useEffect hook is used to update the savedValue state after a delay of 1 second.
	// This is done to be able to start the counter from the previous value and not from 0.
	useEffect(() => {
		const timeout = setTimeout(() => {
			setSavedValue(value);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [value]);

	const eventHandlers = useMemo<
		{ onMouseEnter: (e: MouseEvent) => void; onMouseLeave: (e: MouseEvent) => void } | undefined
	>(() => {
		if (!withAnimation) return;

		return {
			onMouseEnter: (e: MouseEvent) => {
				const char = e.target as HTMLSpanElement;

				const speed = 16 / value;

				animationRef.current = gsap.to(char, {
					// format the speed so it's between 0.08 and 1
					duration: Math.max(0.1, Math.min(1, speed)),
					ease: 'power1.out',
					yoyo: true,
					repeat: -1,
					fontVariationSettings: "'wght' 700" // Target weight
				});
			},
			onMouseLeave: (e: MouseEvent) => {
				const char = e.target as HTMLSpanElement;

				// Kill the animation if it exists
				if (animationRef.current) {
					animationRef.current.kill();
					animationRef.current = null;
				}

				animationRef.current = gsap.to(char, {
					duration: 0.2,
					ease: 'power1.out',
					fontVariationSettings: "'wght' 400" // Initial weight
				});
			}
		};
	}, [value, withAnimation]);

	return (
		<CountUp
			className='number'
			style={inheritTextStyles}
			start={savedValue || 0}
			delay={0}
			duration={2}
			end={value}
			preserveValue
			containerProps={eventHandlers as unknown as { onMouseEnter: MouseEventHandler; onMouseLeave: MouseEventHandler }}
		/>
	);
};
