import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(Draggable);

export const useDraggable = () => {
	const containerRef = useRef(null);
	const draggableRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current as HTMLElement | null;
		let draggableElement = draggableRef.current as Draggable[] | null;

		if (!container) return;

		draggableElement = Draggable.create(container, {
			type: 'x,y',
			edgeResistance: 0,
			inertia: true,
			bounds: container.parentElement,
			onPressInit: function () {
				this.startX = this.x;
				this.startY = this.y;
			},
			onDrag: function () {
				// add cursor grabbing to thw body
				document.body.style.cursor = 'grabbing';
			},
			onRelease: function () {
				gsap.to(this.target, { x: this.startX, y: this.startY, duration: 0.5, ease: 'power1.out' });

				// remove cursor grabbing from the body
				document.body.style.cursor = 'auto';
			}
		});

		return () => {
			draggableElement.forEach((instance) => instance.kill());
		};
	}, []);

	return { containerRef };
};
