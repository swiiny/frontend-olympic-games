import useResponsive from '@hooks/useResponsive';
import * as d3 from 'd3';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { EContinent } from '../Continent/continent.enums';
import { continentMap } from '../Continent/Continent.variables';
import { getStrokeWidth } from './OlympicRings.functions';
import { ringRadius } from './OlympicRings.variables';

export const OlympicRings = () => {
	const svgRef = useRef(null);

	const { isSmallerThanMd } = useResponsive();
	const { colors } = useTheme();

	// to update with dynamic data
	const strokesWidth = getStrokeWidth({
		[EContinent.europe]: 441,
		[EContinent.asia]: 236,
		[EContinent.america]: 210,
		[EContinent.africa]: 41,
		[EContinent.oceania]: 49
	});

	const [strokeWidth, setStrokeWidth] = useState(strokesWidth);

	const style = useMemo(() => {
		if (isSmallerThanMd) {
			return {
				transform: 'scale(1)'
			};
		}

		return {
			transform: 'scale(2)'
		};
	}, [isSmallerThanMd]);

	useEffect(() => {
		if (svgRef.current) {
			const svg = d3.select(svgRef.current).attr('width', 400).attr('height', 170);

			// Clear previous SVG content
			svg.selectAll('*').remove();

			// Define the shadow filter
			const defs = svg.append('defs');
			const filter = defs
				.append('filter')
				.attr('id', 'shadow')
				.attr('x', '-50%')
				.attr('y', '-50%')
				.attr('width', '200%')
				.attr('height', '200%');
			filter
				.append('feDropShadow')
				.attr('dx', 1)
				.attr('dy', 1)
				.attr('stdDeviation', 3)
				.attr('flood-color', '#000000')
				.attr('flood-opacity', 0.2);

			// Draw the background circles
			const circlesData = [
				{ cx: 80, cy: 60, continent: EContinent.europe, id: 'circle-blue', filter: 'url(#shadow)' },
				{
					cx: 200,
					cy: 60,
					continent: EContinent.africa,
					id: 'circle-black',
					filter: 'url(#shadow)'
				},
				{ cx: 320, cy: 60, continent: EContinent.america, id: 'circle-red', filter: 'url(#shadow)' },
				{
					cx: 140,
					cy: 110,
					continent: EContinent.asia,
					id: 'circle-yellow',
					filter: 'url(#shadow)'
				},
				{
					cx: 260,
					cy: 110,
					continent: EContinent.oceania,
					id: 'circle-green',
					filter: 'url(#shadow)'
				}
			];

			circlesData.forEach((circle) => {
				svg
					.append('circle')
					.attr('cx', circle.cx)
					.attr('cy', circle.cy)
					.attr('r', ringRadius)
					.attr('stroke', colors[continentMap[circle.continent].color])
					.attr('stroke-width', strokeWidth[circle.continent])
					.attr('fill', 'none')
					.attr('id', circle.id)
					.attr('filter', circle.filter);
			});

			// Define the clipping paths for the intersections
			defs
				.append('clipPath')
				.attr('id', 'clip-blue')
				.append('circle')
				.attr('cx', 160)
				.attr('cy', 60)
				.attr('r', ringRadius);

			defs
				.append('clipPath')
				.attr('id', 'clip-black-yellow')
				.append('circle')
				.attr('cx', 150)
				.attr('cy', 120)
				.attr('r', ringRadius);

			defs
				.append('clipPath')
				.attr('id', 'clip-black-green')
				.append('circle')
				.attr('cx', 240)
				.attr('cy', 60)
				.attr('r', ringRadius);

			defs
				.append('clipPath')
				.attr('id', 'clip-red')
				.append('circle')
				.attr('cx', 320)
				.attr('cy', 90)
				.attr('r', ringRadius);

			// Draw the circles again with clipping paths
			svg
				.append('circle')
				.attr('cx', 80)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors[continentMap[EContinent.europe].color])
				.attr('stroke-width', strokeWidth[EContinent.europe])
				.attr('fill', 'none')
				.attr('clip-path', 'url(#clip-blue)');

			svg
				.append('circle')
				.attr('cx', 200)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors[continentMap[EContinent.africa].color])
				.attr('stroke-width', strokeWidth[EContinent.africa])
				.attr('fill', 'none')
				.attr('clip-path', 'url(#clip-black-yellow)');

			svg
				.append('circle')
				.attr('cx', 200)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors[continentMap[EContinent.africa].color])
				.attr('stroke-width', strokeWidth[EContinent.africa])
				.attr('fill', 'none')
				.attr('clip-path', 'url(#clip-black-green)');

			svg
				.append('circle')
				.attr('cx', 320)
				.attr('cy', 60)
				.attr('r', ringRadius)
				.attr('stroke', colors[continentMap[EContinent.america].color])
				.attr('stroke-width', strokeWidth[EContinent.america])
				.attr('fill', 'none')
				.attr('clip-path', 'url(#clip-red)');
		}
	}, [colors, strokeWidth]);

	return (
		<>
			<svg className='d3-component' ref={svgRef} style={style} />
		</>
	);
};
