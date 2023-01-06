const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('RONY.db');
var rest = "'McDonald\'s'";
db.each("SELECT DISTINCT city FROM restaurants", (err, row) => {
        console.log(`${row.city}`);
});		

/*
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