$(function(event) {
	
	$(window).scroll(function(event) { //scroll
		
		if($('#habilidades').is(':appeared')){
			
			$('.chart').easyPieChart({ //if aparece ejecuta el script
				scaleColor: "#ecf0f1",
				lineWidth: 15,
				lineCap: 'butt',
				barColor: '#1abc9c',
				trackColor:	"#ecf0f1",
				size: 160,
				animate: 1800
			  });
		};
	
	});


});
