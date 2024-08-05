import CountUp from 'react-countup';
import styled, { keyframes } from 'styled-components';

const shin = keyframes`
	0% {
		transform: translateX(-100px) translateY(-25px) rotate(60deg);
	}
	100% {
		transform: translateX(100px) translateY(-25px) rotate(60deg);
	}
`;

export const StyledCountUp = styled(CountUp)`
	position: relative;

	overflow: hidden;

	&::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;

		height: 100px;
		width: 120px;

		will-change: transform;
		transform: translateX(-110px) translateY(-25px) rotate(60deg);

		// white transparent then white then white transparent
		background: linear-gradient(
			0,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 30%,
			rgba(255, 255, 255, 0.8) 50%,
			rgba(255, 255, 255, 0) 70%,
			rgba(255, 255, 255, 0) 100%
		);

		pointer-events: none;

		transition: opacity 0.1s;

		opacity: 0;
	}

	&.with-animation {
		&:hover {
			&::before {
				opacity: 1;
				// animate the before position
				animation: ${shin} 0.3s 2 linear forwards;
			}
		}
	}
`;
