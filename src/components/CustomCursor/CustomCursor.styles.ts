import styled from 'styled-components';

export const StyledCustomCursor = styled.div`
	position: absolute;
	pointer-events: none; /* Prevent the icon from blocking interactions */
	z-index: 10000; /* Ensure it's on top of other elements */
	//display: none; /* Initially hidden */

	margin-bottom: 12px;

	opacity: 0;

	transition: opacity 0.2s ease-in-out;
`;
