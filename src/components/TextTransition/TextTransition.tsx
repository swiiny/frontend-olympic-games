import { animated, config, SpringConfig, useSpring, useTransition } from '@react-spring/web';
import { useEffect, useRef, useState, type CSSProperties, type PropsWithChildren } from 'react';

export interface TextTransitionProps {
	className?: string;
	delay?: number;
	direction?: 'up' | 'down';
	inline?: boolean;
	springConfig?: SpringConfig;
	style?: CSSProperties;
	translateValue?: string;
}

/**
 * This component is copy-pasted from https://github.com/WinterCore/react-text-transition/blob/master/src/components/TextTransition.tsx
 * The original library returns div elements, but I changed it to span elements to make it semantically correct
 * and remove the error in the console.
 */
export function TextTransition(props: PropsWithChildren<TextTransitionProps>) {
	const {
		direction = 'up',
		inline = false,
		springConfig = config.default,
		delay = 0,
		className,
		style,
		translateValue: tv = '100%',
		children
	} = props;

	const initialRun = useRef(true);
	const fromTransform = direction === 'down' ? `-${tv}` : tv;
	const leaveTransform = direction === 'down' ? tv : `-${tv}`;

	const transitions = useTransition([children], {
		enter: { opacity: 1, transform: 'translateY(0%)' },
		from: { opacity: 0, transform: `translateY(${fromTransform})` },
		leave: {
			opacity: 0,
			transform: `translateY(${leaveTransform})`,
			position: 'absolute'
		},
		config: springConfig,
		immediate: initialRun.current,
		delay: !initialRun.current ? delay : undefined
	});

	const [width, setWidth] = useState<number>(0);
	const currentRef = useRef<HTMLDivElement>(null);
	const heightRef = useRef<number | string>('auto');

	useEffect(() => {
		initialRun.current = false;
		const element = currentRef.current;

		// If element doesn't exist, then do nothing
		if (!element) return;

		const { width, height } = element.getBoundingClientRect();

		setWidth(width);
		heightRef.current = height;
	}, [children, setWidth, currentRef]);

	const widthTransition = useSpring({
		to: { width },
		config: springConfig,
		immediate: initialRun.current,
		delay: !initialRun.current ? delay : undefined
	});

	return (
		<animated.span
			className={`text-transition ${className}`}
			style={{
				...(inline && !initialRun.current ? widthTransition : undefined),
				...style,
				whiteSpace: inline ? 'nowrap' : 'normal',
				display: inline ? 'inline-flex' : 'flex',
				height: heightRef.current
			}}
		>
			{transitions((styles, item) => (
				<animated.span style={{ ...styles }} ref={item === children ? currentRef : undefined} children={item} />
			))}
		</animated.span>
	);
}
