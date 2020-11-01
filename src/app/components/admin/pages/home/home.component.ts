import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  chart1 = {
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Premium",
          data: [500, 800, 600, 1200, 800, 2000, 600],
          backgroundColor: "transparent",
          borderColor: "#5b6582",
          borderWidth: 2,
        },
        // {
        //   label: "Free",
        //   data: [100, 60, 80, 50, 140, 60, 100],
        //   backgroundColor: "transparent",
        //   borderColor: "#36a2eb",
        //   borderWidth: 2,
        // },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "rgba(0,0,0,.6)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 8,
              padding: 10,
            },
          },
        ],
      },
      responsive: true,
      legend: {
        position: "bottom",
        display: false,
      },
    },
  };
  chart2 = {
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Population",
          data: [50, 80, 60, 120, 80, 100, 60],
          backgroundColor: "#28d9ee",
        },
        // {
        //   label: "Free",
        //   data: [100, 60, 80, 50, 140, 60, 100],
        //   backgroundColor: "#36a2eb",
        //   borderColor: "#36a2eb",
        //   borderWidth: 2,
        // },
      ],
    },
    options: {
      barValueSpacing: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "rgba(0,0,0,.6)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 8,
              padding: 10,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.25,
          },
        ],
      },
      //responsive: true,
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Title",
        position: "left",
      },
      plugins: {
        datalabels: {
          color: "black",
          display: true,
          align: "center",
          anchor: "center",
        },
      },
    },
  };
  chart3 = {
    data: {
      datasets: [
        {
          data: [6, 12, 10],
          backgroundColor: ["#5b6582", "#98a4c7", "#36a2eb"],
        },
      ],
      labels: ["html", "css", "javascript"],
    },
    options: {
      legend: {
        position: "bottom",
        display: false,
      },
      cutoutPercentage: 80,
    },
  };

  constructor() {}

  ngOnInit() {
    new Chart("chart-line", {
      type: "line",
      data: this.chart1.data,
      options: this.chart1.options,
    });
    new Chart("chart-bar", {
      type: "bar",
      data: this.chart2.data,
      options: this.chart2.options,
    });
    new Chart("chart-doughnut", {
      type: "doughnut",
      data: this.chart3.data,
      options: this.chart3.options,
    });
  }
}
