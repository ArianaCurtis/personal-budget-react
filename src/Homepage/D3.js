import * as d3 from "d3";
import axios from "axios";


const newData = async () => {
    let budget_data = null;
    try {
        const res = await axios.get('http://localhost:3001/budget')
        budget_data = res.data.myBudget;
    } catch (err) {
        console.error(err);
    }
    return budget_data;
}

const createD3chart = async () => {

    const bData = await newData();
    var chart2 = document.getElementById('D3JS');

    var width = 400,
        height = 400,
        radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal()
    .range(["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]);

    var svg = d3.select(chart2)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var pie = d3.pie()
        .sort(null)
        .value(function (d) {
            return d.budget;
        });

    var arc = d3.arc()
        .outerRadius(radius * 0.9)
        .innerRadius(radius * 0.4);

    var outerArc = svg.selectAll("arc")
        .data(pie(bData))
        .enter()
        .append("g")
        .attr("class", "arc");

        outerArc.append("path")
        .attr("d", arc)
        .attr("fill", function (d) { return color(d.data.title); });

        outerArc.append("text")
        .attr("transform", function (d) {
            var pos = arc.centroid(d);
            return "translate(" + pos + ")";
        })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .text(function (d) {
            return d.data.title + ": " + d.data.budget;
        });
}

createD3chart();

const D3 = () => {
return (
    <div>
        <h1 id="D3JS">Chart 2</h1>
    </div>
    );
};
  
  export default D3;