import * as d3 from 'd3';


class Chart {

	constructor(element) {
		this.data = [1, 2, 3];
		this.element = element;
	}


	render() {
		const svg = d3.select(this.element)
			.append('svg')
			.attr('width', '400px')
			.attr('height', '400px')
			.attr('viewBox', [0, 0, 400, 400])
			.attr('preserveAspectRatio', 'xMinYMin meet')
			.attr('xmlns', 'http://www.w3.org/2000/svg')
			.attr('style', 'max-width: 100%; height: auto; height: intrinsic;');


		svg.append('circle')
			.attr('cx', 200)
			.attr('cy', 200)
			.attr('r', 50)
			.attr('stroke', 'green')
			.attr('fill', 'green');
	}
}

const element = document.getElementById('chart');
const chart = new Chart(element);
chart.render();