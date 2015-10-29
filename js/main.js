$(document).ready(function() {
  $('.chart').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 13,
    lineCap: 'butt',
    barColor: '#66A366',
    trackColor:	"#ecf0f1",
    size: 125,
    animate: 500
  });
}); 

/*$(document).scroll(function () {
var scroll = $("#habilidades").scrollTop();

if 
$(document).scroll(function() {
  var scroll = $(this).scrollTop();

  if (scroll >= 600) {
    $('#habilidades').addClass("chart");
  } else {
    $('#habilidades').removeClass("chart");
  }
 })*/
