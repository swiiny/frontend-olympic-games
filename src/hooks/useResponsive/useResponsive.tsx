'use client';

import { useContext } from 'react';
import { ResponsiveContext } from 'src/contexts/ResponsiveContext/ResponsiveContext';

function useResponsive() {
	const context = useContext(ResponsiveContext);
	if (context === undefined) {
		throw new Error('unable to find ResponsiveContext');
	}

	return context;
}

export { useResponsive };
