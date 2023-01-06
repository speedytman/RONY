"use strict";
/*const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('RONY.db');
var rest = "'McDonald\'s'";
db.each(`"SELECT name, city, state, bid FROM restaurants WHERE name = ${rest}"`, (err, row) => {
        console.log(`There is a ${row.name} in ${row.city}, ${row.state}. ${row.bid}`);
});		


const svg = d3.select('svg');
svg.style('background-color', 'white');


const width = +(svg.attr('width'));
const height = +(svg.attr('height'));

const g = svg.append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

const circle = g.append('circle')
        .attr('r', height / 2)
        .attr('fill', 'red')
        .attr('stroke', 'black')
        ;

const eyespacing = 100;
const eyeoffset = -70;

const left_eye = g.append('circle')
        .attr('r', 30)
        .attr('cx', -eyespacing)
        .attr('cy', eyeoffset)
        .attr('fill', 'black')
        ;

const right_eye = g.append('circle')
        .attr('r', 30)
        .attr('cx',eyespacing)
        .attr('cy',eyeoffset)
        .attr('fill', 'black')
        ;

const mouth = g.append('path')
        .attr('d', d3.arc()({
                innerRadius: 170,
                outerRadius: 150,
                startAngle: Math.PI * 3 / 2,
                endAngle: Math.PI / 2
        }));
*/

const init = function(e) {
        var svg = d3.select("div#container")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 960 600")
                .classed("svg-content", true);

        var path = d3.geoPath();

        d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
          if (error) throw error;

          svg.append("g")
                .attr("class", "states")
            .selectAll("path")
            .data(topojson.feature(us, us.objects.states).features)
            .enter().append("path")
              .attr("d", path)
              .on('click', function(d) {console.log('state.js = ' + d.id), localStorage.setItem('selected-state', d.id), window.document.location = './city.html'})
              ;
        
              svg.append("path")
              .attr("class", "state-borders")
              .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

              svg.append("svg:title")
              .data(topojson.feature(us, us.objects.states).features)
              .text( function(d) { return d.properties.name; });
        });
        
};
document.addEventListener('DOMContentLoaded', function() {
        init();
});
