$(document).ready(function(){
	var d = document.querySelectorAll('.s');
	var x, i = 0;
	$(".leftX").click(function() {
	    if (x<-0.2) {x += 102.02; i--;}
	    else {x = -1326.26;i=13;}
	    $(".list img").css('transform', "translateX("+x+"%)");
	    for( let j = 0; j < d.length; j++){
	    	d[j].style.backgroundColor = "#AAAAAACC";
		}
	    d[i].style.backgroundColor = "#666666CC";
	});
	$(".rightX").click(function() {
	    if (x>-1300) {x -= 102.02; i++;}
	    else {x = 0; i=0;}
	    $(".list img").css('transform', "translateX("+x+"%)");
	    for( let j = 0; j < d.length; j++){
	    	d[j].style.backgroundColor = "#AAAAAACC";
		}
	    d[i].style.backgroundColor = "#666666CC";
	});
	$(".rt").click(function() {
		$(".smenu").css('display', 'flex');
	});
	$(".search img").click(function() {
		$(".search div").toggle();
	});
	$(".program p").click(function() {
		$(".bar").hide();
		$(".c1 a, .c1 p").css('color', 'white');
		$(".program .bar").css('display', 'flex');
		$(".program .c1 a, .program .c1 p").css('color', '#5BADF9');
	});
	$(".learning p").click(function() {
		$(".bar").hide();
		$(".c1 a, .c1 p").css('color', 'white');
		$(".learning .bar").css('display', 'flex');
		$(".learning .c1 a, .learning .c1 p").css('color', '#5BADF9');
	});
	$(".project p").click(function() {
		$(".bar").hide();
		$(".c1 a, .c1 p").css('color', 'white');
		$(".project .bar").css('display', 'flex');
		$(".project .c1 a, .project .c1 p").css('color', '#5BADF9');
	});
	$(".results p").click(function() {
		$(".bar").hide();
		$(".c1 a, .c1 p").css('color', 'white');
		$(".results .bar").css('display', 'flex');
		$(".results .c1 a, .results .c1 p").css('color', '#5BADF9');
	});
	$(".public p").click(function() {
		$(".public .barx").css('display', 'flex');
		$(".public .c2 a, .public .c2 p").css('color', '#5BADF9');
	});
	$("#en").click(function() {
		$(".ru").hide();
		$(".kz").hide();
		$(".en").show();
		$(".lang a").css('color','white');
		$("#en").css('color','#FBDF4C');
		$("*").css('font-family', 'Jost');
	});
	$("#ru").click(function() {
		$(".en").hide();
		$(".kz").hide();
		$(".ru").show();
		$(".lang a").css('color','white');
		$("#ru").css('color','#FBDF4C');
		$("*").css('font-family', 'Jost');
	});
	$("#kz").click(function() {
		$(".ru").hide();
		$(".en").hide();
		$(".kz").show();
		$(".lang a").css('color','white');
		$("#kz").css('color','#FBDF4C');
		$("*").css('font-family', 'calibri');
	});
});