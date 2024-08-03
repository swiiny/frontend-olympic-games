import { EContinent } from '@home/_components/Continent/continent.enums';
import useMedalsQuery from 'src/queries/useMedalsQuery';

const maxStrokeWidth = 24;
const minStrokeWidth = 4;

export function useStrokesWidth() {
	const { data } = useMedalsQuery();

	const totalMedals =
		data.europe.totalAmount +
		data.asia.totalAmount +
		data.america.totalAmount +
		data.africa.totalAmount +
		data.oceania.totalAmount;

	return {
		[EContinent.europe]: Math.floor((data.europe.totalAmount / totalMedals) * maxStrokeWidth + minStrokeWidth),
		[EContinent.africa]: Math.floor((data.africa.totalAmount / totalMedals) * maxStrokeWidth + minStrokeWidth),
		[EContinent.america]: Math.floor((data.america.totalAmount / totalMedals) * maxStrokeWidth + minStrokeWidth),
		[EContinent.asia]: Math.floor((data.asia.totalAmount / totalMedals) * maxStrokeWidth + minStrokeWidth),
		[EContinent.oceania]: Math.floor((data.oceania.totalAmount / totalMedals) * maxStrokeWidth + minStrokeWidth)
	};
}
