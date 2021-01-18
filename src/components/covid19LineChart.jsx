import React, { Component } from "react";
import { Line } from "react-chartjs-2";
class Covid19LineChart extends Component {
  state = {
    country: [],
    cases: [],
  };
  data = {
    labels: ["USA", "India", "Africa", "Brazil", "Canada"],
    datasets: [
      {
        label: "Cases (M)",
        data: [5, 8, 7, 5, 6],
        borderColor: ["rgb(255,206,86,0.2)"],
        backgroundColor: ["rgb(255,206,86,0.2)"],
        pointBackgroundColor: ["rgb(255,206,86,0.2)"],
        pointBorderColor: ["rgb(255,206,86,0.2)"],
      },
      {
        label: "Deaths (M)",
        data: [1, 2, 3, 4, 1],
        borderColor: ["rgb(54,162,235,0.2)"],
        backgroundColor: ["rgb(54,162,235,0.2)"],
        pointBackgroundColor: ["rgb(54,162,235,0.2)"],
        pointBorderColor: ["rgb(54,162,235,0.2)"],
      },
    ],
  };
  options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            stepSize: 1,
          },
        },
      ],
    },
  };
  render() {
    return (
      <div>
        <Line data={this.data} options={this.options} />
      </div>
    );
  }
}

export default Covid19LineChart;
