import $ from "jquery";
window.$ = $;
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootswatch/dist/darkly/bootstrap.min.css";
import "../src/main.css"; /* Modification des chemins CSS ici pour ne plus les appeler dans le head du index.html */
import "../public/carousel.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "jquery-smooth-scroll";
import Chart from "chart.js";
import Darkmode from "darkmode-js";

// Paramèetre pour le bouton darkmode
new Darkmode().showWidget();
var options = {
  time: "0.5s", // default: "0.3s"
  mixColor: "#fff", // default: "#fff"
  backgroundColor: "#fff", // default: "#fff"
  buttonColorDark: "#100f2c", // default: "#100f2c"
  buttonColorLight: "#fff" // default: "#fff"
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

$(document).ready(() => {
  $("a").smoothScroll();
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
          backgroundColor: ["#777777", "white"],
          borderColor: "white",
          borderWidth: 3,
          hoverBackgroundColor: "#343a40",
          cutoutPercentage: 80 // Ne fonctionne pas ?!
        }
      ]
    },
    options: {}
  });
}
