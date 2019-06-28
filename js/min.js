$(document).ready(function(){
	$("html").niceScroll({
		cursorwidth:8,
		cursorborder:0,
		cursorcolor:'#0097E0',
	});
	$('.counter').countUp({
    time: 5000
});

});
$(document).ready(function(){
    $('#bar1').barfiller({	barColor: "green",duration:10000 });
    $('#bar2').barfiller({	barColor: "blue",duration:10000 });
    $('#bar3').barfiller({	barColor: "yellow",duration:10000 });
    $('#bar4').barfiller({	barColor: "red",duration:10000 });
    $('#bar5').barfiller({	barColor: "purple",duration:10000 });
});
var typed = new Typed('.typed',{
		strings:['web developer','font end developer',],
		typeSpeed:20,
		backSpeed:15,
		startDelay:1000,
		backDelay:1000,
		loop:true,
	
	});