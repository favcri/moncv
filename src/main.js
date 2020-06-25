import $ from "jquery";
window.$ = $;
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootswatch/dist/darkly/bootstrap.min.css";
import "./main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Chart from "chart.js";

$(document).ready(() => {
  const progressBars = findProgressBars();
  replaceProgressBars(progressBars);
  $(".carousel").carousel({
    interval: 30000
  });
});

function findProgressBars() {
  return [...document.querySelectorAll(".progress")];
}

function replaceProgressBars(progressBars) {
  for (let progressBar of progressBars) {
    const valueElement = progressBar.querySelector(".progress-bar");
    var value = valueElement.getAttribute("aria-valuenow");
    // var color =
    var canvas = document.createElement("canvas");
    progressBar.replaceWith(canvas);

    createChart(canvas, value);
  }
}

function createChart(ctx, value) {
  new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [value, 100 - value],
          backgroundColor: ["", "white"],
          borderColor: "white"
        }
      ]
    },
    options: {}
  });
}
