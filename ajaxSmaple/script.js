$(function(){
	$("div").wrapAll("<div class='container'/>");
	/* css add */
	$("div.container").css({
		width		: "950px",
		minHeight	: "700px",
		margin		: "0 auto",
		outline		: "1px dotted red"
	});
	$("div").children(".menu").width("700px").css({
		minHeight	: "40px",
		outline		: "1px solid green",
		margin		: "0 auto"	
	});
	$(".container .box").css({
		width : "inherit",
		height : "800px",
		outline : "2px dashed salmon"
	});
	/* end css */
	for ($i=0;$i<4;$i++){
		$(".menu").append("<li></li>");
		$("li").eq($i).append("<a href=\"#\">"+"menu"+$i+"</a>");
	}
	$("li").wrapAll("<ul />");
});
