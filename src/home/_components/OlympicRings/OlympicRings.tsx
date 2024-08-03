import useResponsive from '@hooks/useResponsive';
import useStrokesWidth from '@hooks/useStrokesWidth';
import * as d3 from 'd3';
import { FC, useEffect, useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';
import { continentMap } from '../Continent/Continent.variables';
import { circlesData, ringRadius } from './OlympicRings.variables';

export const OlympicRings: FC = () => {
	const svgRef = useRef(null);

	const { isSmallerThanMd } = useResponsive();
	const { colors } = useTheme();

	const strokesWidth = useStrokesWidth();

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
			const svg = d3.select(svgRef.current).attr('width', 400).attr('height', 190);

			svg.selectAll('*').remove();

			// Add the shadow
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

			// Define the clipping paths for the intersections
			circlesData.forEach((circle) => {
				circle.clipPaths.forEach((clip) => {
					defs
						.append('clipPath')
						.attr('id', clip.id)
						.append('circle')
						.attr('cx', clip.cx)
						.attr('cy', clip.cy)
						.attr('r', ringRadius);
				});
			});

			// Draw main circles first
			svg
				.selectAll('circle.main-circle')
				.data(circlesData)
				.enter()
				.append('circle')
				.attr('class', 'main-circle')
				.attr('cx', (d) => d.cx)
				.attr('cy', (d) => d.cy)
				.attr('r', ringRadius)
				.attr('stroke', (d) => colors[continentMap[d.continent].color])
				.attr('stroke-width', (d) => strokesWidth[d.continent])
				.attr('fill', 'rgba(0,0,0,0)') // Set fill to transparent
				.attr('id', (d) => d.id)
				.attr('filter', (d) => d.filter);

			// Draw the clipped circles
			svg
				.selectAll('circle.clipped-circle')
				.data(circlesData)
				.enter()
				.append('g')
				.attr('class', (d) => `clipped-circle-group group-${d.id}`)
				.each(function (d) {
					const group = d3.select(this);
					d.clipPaths.forEach((clip) => {
						group
							.append('circle')
							.attr('cx', d.cx)
							.attr('cy', d.cy)
							.attr('r', ringRadius)
							.attr('stroke', colors[continentMap[d.continent].color])
							.attr('stroke-width', strokesWidth[d.continent])
							.attr('fill', 'none')
							.attr('clip-path', `url(#${clip.id})`);
					});
				});

			// Create invisible circles for hover detection
			svg
				.selectAll('circle.hover-circle')
				.data(circlesData)
				.enter()
				.append('circle')
				.attr('class', 'hover-circle')
				.attr('cx', (d) => d.cx)
				.attr('cy', (d) => d.cy)
				.attr('r', ringRadius + 20) // Increase the radius for better hover detection
				.attr('fill', 'rgba(0,0,0,0.0)') // Set fill to transparent
				.attr('pointer-events', 'all') // Ensure the invisible circle can detect events
				.on('mouseover', (event, d) => {
					const [mouseX, mouseY] = d3.pointer(event);
					const offsetX = (mouseX - d.cx) * 0.1; // Move 10% towards the mouse
					const offsetY = (mouseY - d.cy) * 0.1;

					d3.select(`#${d.id}`)
						.transition()
						.ease(d3.easeBounceIn)
						.duration(200)
						.attr('cx', d.cx + offsetX)
						.attr('cy', d.cy + offsetY);

					d3.selectAll(`.group-${d.id} circle`)
						.transition()
						.ease(d3.easeBounceIn)
						.duration(200)
						.attr('cx', d.cx + offsetX)
						.attr('cy', d.cy + offsetY);
				})
				.on('mousemove', (event, d) => {
					const [mouseX, mouseY] = d3.pointer(event);
					const offsetX = (mouseX - d.cx) * 0.1; // Move 10% towards the mouse
					const offsetY = (mouseY - d.cy) * 0.1;

					d3.select(`#${d.id}`)
						.transition()
						.ease(d3.easeLinear)
						.duration(100)
						.attr('cx', d.cx + offsetX)
						.attr('cy', d.cy + offsetY);

					d3.selectAll(`.group-${d.id} circle`)
						.transition()
						.ease(d3.easeLinear)
						.duration(100)
						.attr('cx', d.cx + offsetX)
						.attr('cy', d.cy + offsetY);
				})
				.on('mouseout', (_, d) => {
					d3.select(`#${d.id}`).transition().ease(d3.easeBounceOut).duration(500).attr('cx', d.cx).attr('cy', d.cy);

					d3.selectAll(`.group-${d.id} circle`)
						.transition()
						.ease(d3.easeBounceOut)
						.duration(500)
						.attr('cx', d.cx)
						.attr('cy', d.cy);
				});
		}
	}, [colors, strokesWidth]);

	return <svg className='d3-component' ref={svgRef} style={style} />;
};
