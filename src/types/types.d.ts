interface TFrames {
	width: number;
	height: number;
}

type TUseResponsive = {
	screenFrames?: TFrames;
	isSmallerThanXs?: boolean;
	isSmallerThanSm?: boolean;
	isSmallerThanMd?: boolean;
	isSmallerThanLg?: boolean;
	isSmallerThanSxl?: boolean;
	isSmallerThanXl?: boolean;
	isSmallerThanXxl?: boolean;
};

type TOlympicRingColors = 'blue' | 'black' | 'red' | 'yellow' | 'green';
