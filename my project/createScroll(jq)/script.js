$(function(){
var p_scroll,p_content ,rem = 'px',i;

/*+++fill div.content with loop */
for (i=0;i<40;i++)
	$('.content').append("test<br />");
/*---end loop*/
/*+++ create a func for move*/
function move (event){
	if (event.clientY < $(".container").css("top").replace(rem,''))
		p_scroll = 1;
	else if  (event.clientY-$(".container").css("top").replace(rem,'') > $(".path").height())
		p_scroll  = $(".path").height()+1;
	else 
		p_scroll = event.clientY-$(".container").css("top").replace(rem,'');
	$(".pointer").css("top",p_scroll+'px');
	
	
	//console.log("hight content :: ",$(".content").height());
	//console.log("hight scroll  :: ",$(".scroll ").height());
	p_content = (($(".content").height()-$(".veiw").height()) * p_scroll)/$(".scroll ").height();
	$(".content").css('top',-1*p_content+'px');
	
}
/*--- end func move */
/* mouse down !!*/
	$(".pointer").mousedown(function()
	{
	/*
		$(".content").css({
			"-webkit-user-select"	:"none",
			"-khtml-user-select"	:"none",
			"-moz-user-select"		:"none",
			"-ms-user-select"		:"none",
			"-o-user-select"		:"none",
			"user-select"			:"none"
		});
	*/

		$(".pointer").css("background-color","#57FFB5");
		$(".scroll").attr("onmousedown","return false");/*fix a bug ! */

		$(window).mousemove(function(e)
		{
			move(e);
		});	
	});
/* mouse up !!*/
	$(document).mouseup(function()
	{
	/*
		$(".content").css({
			"-webkit-user-select"	:"text",
			"-khtml-user-select"	:"text",
			"-moz-user-select"		:"text",
			"-ms-user-select"		:"text",
			"-o-user-select"		:"text",
			"user-select"			:"text"
		});
	*/
		$(".pointer").css("background-color","black");
		$(window).unbind('mousemove');
	});
});
