import * as d3_selection from 'd3-selection';
import * as d3_request from 'd3-request';
import * as d3_force from 'd3-force';

var width = 600;
var height = 600;

var simulation = d3_force
    .forceSimulation()
    .velocityDecay(0.2)
    .force('center', d3_force.forceCenter(100, 100))
    .force('y', d3_force.forceY(0))
    .force('x', d3_force.forceX(0));

var svg = d3_selection
    .select('#test')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

d3_request.json('data.json', (error, data) => {
    var nodes = svg
        .selectAll('.test')
        .data(data);

    nodes
        .enter()
        .append('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.size)
        .classed('test', true);

    simulation
        .nodes(data)
        .on('tick', () => data.attr(d => d.x).attr(d => d.y));
});