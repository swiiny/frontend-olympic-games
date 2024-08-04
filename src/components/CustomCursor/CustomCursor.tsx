import { FC } from 'react';
import { StyledCustomCursor } from './CustomCursor.styles';

export const CustomCursor: FC = () => {
	return (
		<StyledCustomCursor className='custom-cursor'>
			<img src='/tour-eiffel.svg' alt='Tour Eiffel' />
		</StyledCustomCursor>
	);
};
