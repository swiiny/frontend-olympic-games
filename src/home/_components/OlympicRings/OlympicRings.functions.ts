import { EContinent } from '../Continent/continent.enums';
import { maxStrokeWidth, minStrokeWidth } from './OlympicRings.variables';

export function getStrokeWidth(continentMedals: { [key in EContinent]: number }): Record<EContinent, number> {
	const totalMedals =
		continentMedals.europe +
		continentMedals.asia +
		continentMedals.america +
		continentMedals.africa +
		continentMedals.oceania;

	const strokeWidth = {
		[EContinent.europe]: (continentMedals.europe / totalMedals) * maxStrokeWidth + minStrokeWidth,
		[EContinent.africa]: (continentMedals.africa / totalMedals) * maxStrokeWidth + minStrokeWidth,
		[EContinent.america]: (continentMedals.america / totalMedals) * maxStrokeWidth + minStrokeWidth,
		[EContinent.asia]: (continentMedals.asia / totalMedals) * maxStrokeWidth + minStrokeWidth,
		[EContinent.oceania]: (continentMedals.oceania / totalMedals) * maxStrokeWidth + minStrokeWidth
	};

	return strokeWidth;
}
