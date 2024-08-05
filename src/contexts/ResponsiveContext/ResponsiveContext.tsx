import { createContext, FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { getResponsive } from './ResponsiveContext.functions';

const ResponsiveContext = createContext<TUseResponsive | undefined>(undefined);

const breakpoints = [480, 660, 960, 1200, 1400, 1600, 1800];

const ResponsiveContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [screenFrames, setScreenFrames] = useState<TFrames>(getResponsive());
	const [isSmallerThanBreakpoint, setIsSmallerThanBreakpoint] = useState<boolean[]>(breakpoints.map(() => false));

	const handleResize = useCallback(() => {
		const newScreenFrames = getResponsive();
		setScreenFrames(newScreenFrames);
		const newIsSmallerThanBreakpoint = breakpoints.map((breakpoint) => newScreenFrames.width <= breakpoint);
		setIsSmallerThanBreakpoint(newIsSmallerThanBreakpoint);
	}, []);

	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	const value = useMemo(
		() => ({
			screenFrames,
			isSmallerThanXs: isSmallerThanBreakpoint[0],
			isSmallerThanSm: isSmallerThanBreakpoint[1],
			isSmallerThanMd: isSmallerThanBreakpoint[2],
			isSmallerThanLg: isSmallerThanBreakpoint[3],
			isSmallerThanSxl: isSmallerThanBreakpoint[4],
			isSmallerThanXl: isSmallerThanBreakpoint[5],
			isSmallerThanXxl: isSmallerThanBreakpoint[6]
		}),
		[isSmallerThanBreakpoint, screenFrames]
	);

	return <ResponsiveContext.Provider value={value}>{children}</ResponsiveContext.Provider>;
};

export { ResponsiveContext, ResponsiveContextProvider };
