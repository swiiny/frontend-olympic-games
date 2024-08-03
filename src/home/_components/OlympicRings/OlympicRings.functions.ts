import { maxStrokeWidth, minStrokeWidth } from './OlympicRings.variables';

export function getStrokeWidth(continentMedals: {
	europe: number;
	asia: number;
	america: number;
	africa: number;
	oceania: number;
}) {
	const totalMedals =
		continentMedals.europe +
		continentMedals.asia +
		continentMedals.america +
		continentMedals.africa +
		continentMedals.oceania;

	const strokeWidth = {
		blue: (continentMedals.europe / totalMedals) * maxStrokeWidth + minStrokeWidth,
		black: (continentMedals.africa / totalMedals) * maxStrokeWidth + minStrokeWidth,
		red: (continentMedals.america / totalMedals) * maxStrokeWidth + minStrokeWidth,
		yellow: (continentMedals.asia / totalMedals) * maxStrokeWidth + minStrokeWidth,
		green: (continentMedals.oceania / totalMedals) * maxStrokeWidth + minStrokeWidth
	};

	return strokeWidth;
}
