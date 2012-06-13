$(function(){
	stat="block";
	/*
		//a simple idea for show & hidden a box:D
		$("button").click(function(){$(".sh").slideToggle();});
	*/
	$("button").click(function(){
		$(".sh").css("display",stat = (stat=="block")?"none":"block");
	});
});