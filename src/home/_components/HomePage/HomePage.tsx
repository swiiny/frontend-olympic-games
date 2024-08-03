import useResponsive from '@hooks/useResponsive';
import OlympicRings from '../OlympicRings';

export const HomePage = () => {
	const { isSmallerThanMd } = useResponsive();
	return (
		<>
			<OlympicRings />
		</>
	);
};
