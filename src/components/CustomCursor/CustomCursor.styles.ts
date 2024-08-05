import styled from 'styled-components';

export const StyledCustomCursor = styled.div`
	position: absolute;
	pointer-events: none; /* Prevent the icon from blocking interactions */
	z-index: 10000; /* Ensure it's on top of other elements */
	//display: none; /* Initially hidden */

	margin-bottom: 12px;

	opacity: 0;

	transition: opacity 0.2s ease-in-out;

	& .tour-eiffel-light {
		position: absolute;
		transition: opacity 1s ease-in-out;
		opacity: 0;

		transform: translate(-50%, -50%);
	}

	& .tour-eiffel-dark {
		position: absolute;
		transition: opacity 1s ease-in-out;
		opacity: 1;

		transform: translate(-50%, -50%);
	}
`;
