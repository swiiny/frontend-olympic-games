import { FC } from 'react';
import { StyledCustomCursor } from './CustomCursor.styles';

export const CustomCursor: FC = () => {
	return (
		<StyledCustomCursor className='custom-cursor'>
			<img className='tour-eiffel-dark' src='/tour-eiffel.svg' alt='Tour Eiffel' />
			<img className='tour-eiffel-light' src='/tour-eiffel-light.svg' alt='Tour Eiffel' />
		</StyledCustomCursor>
	);
};
