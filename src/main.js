import * as d3_selection from "d3-selection";
import * as d3_request from "d3-request";
import * as d3_shape from "d3-shape";

var width = 600;
var height = 600;

var valuecircle = d3_shape.arc()
    .innerRadius(0)
    .outerRadius(d => d.size)
    .startAngle(0)
    .endAngle(Math.PI);
var svg = d3_selection.select('#test')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
d3_request.json('data.json', (error, data) => {
    svg.append("path")
        .data([data])
        .attr("class", "circle")
        .attr("d", valuecircle);
});