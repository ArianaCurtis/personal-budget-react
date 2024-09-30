import axios from "axios";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

var data = {
labels: [],
datasets: [
    {
    data: [],
    backgroundColor: [
        '#413c58',
        '#a3c4bc',
        '#BFD7B5',
        '#E7EFC5',
        '#F2DDA4',
        '#DAB49D',
        '#c9c19f'
    ],
    hoverOffset: 4
} ]
};

function getBudget() {
axios
.get('http://localhost:3001/budget')
.then(function (res) {
    for (var i = 0; i < res.data.myBudget.length; i++) {
        data.datasets[0].data[i] = res.data.myBudget[i].budget;
        data.labels[i] = res.data.myBudget[i].title;
    }
    console.log(data);
});
}

getBudget();

const PieChart = () => {
return (
    <div>
        <div><Pie data={data} /></div>
    </div>
    );
};
  
  export default PieChart;