import { useCallback } from 'react';

/**
 * Custom hook that enables a custom cursor behavior on mouse enter and mouse leave events.
 * @returns An object containing the `onMouseEnter` and `onMouseLeave` functions.
 */
export const useCustomCursor = () => {
	const updateCursorPosition = (event: MouseEvent) => {
		const customCursor = document.querySelector('.custom-cursor') as HTMLElement;
		customCursor.style.left = `${event.pageX}px`;
		customCursor.style.top = `${event.pageY}px`;
	};

	const onMouseEnter = useCallback(() => {
		const customCursor = document.querySelector('.custom-cursor') as HTMLElement;
		customCursor.style.opacity = '1';

		// Hide the original cursor
		const body = document.querySelector('body') as HTMLElement;
		body.style.cursor = 'none';

		document.addEventListener('mousemove', updateCursorPosition);
	}, []);

	const onMouseLeave = useCallback(() => {
		const customCursor = document.querySelector('.custom-cursor') as HTMLElement;
		customCursor.style.opacity = '0';

		// Show the original cursor
		const body = document.querySelector('body') as HTMLElement;
		body.style.cursor = 'default';

		document.removeEventListener('mousemove', updateCursorPosition);
	}, []);

	return {
		onMouseEnter,
		onMouseLeave
	};
};
