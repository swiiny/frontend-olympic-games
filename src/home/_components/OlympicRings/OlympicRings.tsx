import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

const maxStrokeWidth = 20;
const minStrokeWidth = 5;

function getStrokeWidth(continentMedals: {
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
		black: (continentMedals.asia / totalMedals) * maxStrokeWidth + minStrokeWidth,
		red: (continentMedals.america / totalMedals) * maxStrokeWidth + minStrokeWidth,
		yellow: (continentMedals.africa / totalMedals) * maxStrokeWidth + minStrokeWidth,
		green: (continentMedals.oceania / totalMedals) * maxStrokeWidth + minStrokeWidth
	};

	return strokeWidth;
}

export const OlympicRings = () => {
	const svgRef = useRef(null);

	const ringRadius = 50;

	const { colors } = useTheme();

	// to update with dynamic data
	const strokesWidth = getStrokeWidth({
		europe: 441,
		asia: 236,
		america: 210,
		africa: 41,
		oceania: 49
	});

	const [strokeWidth, setStrokeWidth] = useState(strokesWidth);

	/* const updateStrokeWidth = () => {
		setStrokeWidth({
			blue: Math.random() * 20,
			black: Math.random() * 20,
			red: Math.random() * 20,
			yellow: Math.random() * 20,
			green: Math.random() * 20
		});
	};
 */
	useEffect(() => {
		if (svgRef.current) {
			const svg = d3.select(svgRef.current).attr('width', 400).attr('height', 180);

			// Draw the background circles
			svg.selectAll('*').remove();

			svg
				.append('circle')
				.attr('cx', 100)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors.blue)
				.attr('stroke-width', strokeWidth.blue)
				.attr('fill', 'none')
				.attr('id', 'circle-blue');

			svg
				.append('circle')
				.attr('cx', 220)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors.black)
				.attr('stroke-width', strokeWidth.black)
				.attr('fill', 'none')
				.attr('id', 'circle-black');

			svg
				.append('circle')
				.attr('cx', 340)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors.red)
				.attr('stroke-width', strokeWidth.red)
				.attr('fill', 'none')
				.attr('id', 'circle-red');

			svg
				.append('circle')
				.attr('cx', 160)
				.attr('cy', 110)
				.attr('r', ringRadius)
				.attr('stroke', colors.yellow)
				.attr('stroke-width', strokeWidth.yellow)
				.attr('fill', 'none')
				.attr('id', 'circle-yellow');

			svg
				.append('circle')
				.attr('cx', 280)
				.attr('cy', 110)
				.attr('r', ringRadius)
				.attr('stroke', colors.green)
				.attr('stroke-width', strokeWidth.green)
				.attr('fill', 'none')
				.attr('id', 'circle-green');

			// Define the clipping paths for the intersections
			const defs = svg.append('defs');

			// Blue over Yellow
			defs
				.append('clipPath')
				.attr('id', 'clip-blue')
				.append('circle')
				.attr('cx', 160)
				.attr('cy', 60)
				.attr('r', ringRadius);

			// Black over Yellow and Green
			defs
				.append('clipPath')
				.attr('id', 'clip-black-yellow')
				.append('circle')
				.attr('cx', 180)
				.attr('cy', 180)
				.attr('r', ringRadius);

			defs
				.append('clipPath')
				.attr('id', 'clip-black-green')
				.append('circle')
				.attr('cx', 280)
				.attr('cy', 60)
				.attr('r', ringRadius);

			// Red over Green
			defs
				.append('clipPath')
				.attr('id', 'clip-red')
				.append('circle')
				.attr('cx', 310)
				.attr('cy', 180)
				.attr('r', ringRadius);

			// Draw the circles again with clipping paths
			svg
				.append('circle')
				.attr('cx', 100)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors.blue)
				.attr('stroke-width', strokeWidth.blue)
				.attr('fill', 'none')
				.attr('clip-path', 'url(#clip-blue)');

			svg
				.append('circle')
				.attr('cx', 220)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors.black)
				.attr('stroke-width', strokeWidth.black)
				.attr('fill', 'none')
				.attr('clip-path', 'url(#clip-black-yellow)');

			svg
				.append('circle')
				.attr('cx', 220)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors.black)
				.attr('stroke-width', strokeWidth.black)
				.attr('fill', 'none')
				.attr('clip-path', 'url(#clip-black-green)');

			svg
				.append('circle')
				.attr('cx', 340)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors.red)
				.attr('stroke-width', strokeWidth.red)
				.attr('fill', 'none')
				.attr('clip-path', 'url(#clip-red)');

			// Transition to animate stroke width
			/* svg
				.selectAll('circle')
				.transition()
				.duration(1000)
				.attr('stroke-width', (d, i) => {
					switch (i) {
						case 0:
							return strokeWidth.blue;
						case 1:
							return strokeWidth.black;
						case 2:
							return strokeWidth.red;
						case 3:
							return strokeWidth.yellow;
						case 4:
							return strokeWidth.green;
						default:
							return 10;
					}
				}); */

			/* 	d3.select('#circle-blue').transition().duration(1000).attr('stroke-width', strokeWidth.blue);
			d3.select('#circle-black').transition().duration(1000).attr('stroke-width', strokeWidth.black);
			d3.select('#circle-red').transition().duration(1000).attr('stroke-width', strokeWidth.red);
			d3.select('#circle-yellow').transition().duration(1000).attr('stroke-width', strokeWidth.yellow);
			d3.select('#circle-green').transition().duration(1000).attr('stroke-width', strokeWidth.green);

			// Animate the clipping path circles as well
			d3.select('#clip-blue circle').transition().duration(1000).attr('stroke-width', strokeWidth.blue);

			d3.select('#clip-black-yellow circle').transition().duration(1000).attr('stroke-width', strokeWidth.black);

			d3.select('#clip-black-green circle').transition().duration(1000).attr('stroke-width', strokeWidth.black);

			d3.select('#clip-red circle').transition().duration(1000).attr('stroke-width', strokeWidth.red); */
		}
	}, [
		colors.black,
		colors.blue,
		colors.green,
		colors.red,
		colors.yellow,
		strokeWidth.black,
		strokeWidth.blue,
		strokeWidth.green,
		strokeWidth.red,
		strokeWidth.yellow
	]);

	return (
		<>
			<svg className='d3-component' ref={svgRef} />
			{/* <button onClick={updateStrokeWidth}>Animate Stroke Width</button> */}
		</>
	);
};
