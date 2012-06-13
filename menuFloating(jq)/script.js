$(function(){
	var Pos_menu = parseInt($(".box").css("top").substring(0,$(".box").css("top").indexOf("px")));
	$(window).scroll(function(){
		var offset = Pos_menu + $(document).scrollTop()+"px";
		$(".box").animate({top:offset},{duration:900,queue:false}); 
	});	
});
