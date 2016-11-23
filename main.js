///<reference path="node_modules/@types/d3-selection/index.d.ts" />
///<reference path="node_modules/@types/d3-request/index.d.ts" />
///<reference path="node_modules/@types/d3-shape/index.d.ts" />
"use strict";
var d3_selection = require("d3-selection");
var d3_request = require("d3-request");
var d3_shape = require("d3-shape");
var width = 600;
var height = 600;
var valuecircle = d3_shape.arc()
    .innerRadius(0)
    .outerRadius(function (d) { return d.size; })
    .startAngle(0)
    .endAngle(Math.PI);
var svg = d3_selection.select('#test')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
d3_request.json('data.json', function (error, data) {
    svg.append("path")
        .data([data])
        .attr("class", "circle")
        .attr("d", valuecircle);
});
//# sourceMappingURL=main.js.map