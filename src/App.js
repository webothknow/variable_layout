import React from "react";
import "./App.css";
import { Line } from "react-chartjs-2";

function App() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="App">
      <div class="flex-container">
        <div class="flex-item">
          <div class="chart_wrap">
            1
            <Line data={data} options={options} />
            <Line data={data} options={options} />
          </div>
        </div>
        <div class="flex-item">
          <div class="chart_wrap">
            2
            <Line data={data} options={options} />
            <Line data={data} options={options} />
          </div>
        </div>
        <div class="flex-item">
          <div class="chart_wrap">
            3
            <Line data={data} options={options} />
            <Line data={data} options={options} />
          </div>
        </div>
        <div class="flex-item">
          <div class="chart_wrap">
            4
            <Line data={data} options={options} />
            <Line data={data} options={options} />
          </div>
        </div>
        <div class="flex-item">
          <div class="chart_wrap">
            5
            <Line data={data} options={options} />
            <Line data={data} options={options} />
          </div>
        </div>
        <div class="flex-item">
          <div class="chart_wrap">
            6
            <Line data={data} options={options} />
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
