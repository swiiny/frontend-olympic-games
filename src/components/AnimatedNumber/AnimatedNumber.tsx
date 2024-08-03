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
