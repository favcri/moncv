import $ from "jquery";
window.$ = $;
import "bootstrap";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "jquery-smooth-scroll";

$(document).ready(() => {
    $("a").smoothScroll();
});
$(document).ready(() => {
  console.log("it works!");
});
