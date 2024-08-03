import gsap from 'gsap';
import { FC } from 'react';
import TextTransition from '../TextTransition';

export const AnimatedNumber: FC<{ value: number }> = ({ value }) => {
	const numbers = value.toString().split('');

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
