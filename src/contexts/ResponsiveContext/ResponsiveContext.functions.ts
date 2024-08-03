export function getResponsive(): TFrames {
	if (typeof window === 'undefined') {
		return {
			width: 1200,
			height: 900
		};
	}

	const { innerWidth: width, innerHeight: height } = window;

	return {
		width,
		height
	};
}
