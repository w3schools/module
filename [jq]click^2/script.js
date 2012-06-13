$(function(){
	stat="block";
	/*
		//a simple idea for show & hidden a box:D(1)
		$("button").click(function(){$(".sh").slideToggle();});
	*/
	/*
		$("button").click(function(){
			$(".sh").css("display",stat = (stat=="block")?"none":"block");
		});
	*/
	var open_panle;
	$("button").click(function(){
		open_panle = ($(".sh").stop().animate({
				height:(!open_panle)?"2px":"300px"
			})
			&&
			!open_panle
		)?1:0;
	});
});