/*
 * Tooltip script 
 * powered by jQuery (http://www.jquery.com)
 * written by Alen Grakalic (http://cssglobe.com)
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 */

//if (jQuery.browser.msie && parseInt(jQuery.browser.version) == 6 )
if (BrowserDetect.browser == "Explorer" && BrowserDetect.version == 6 )
{
    // Omitting IE6
}
else
{
    this.tooltip = function(){	
	    /* CONFIG */		
		    xOffset = -22;
		    yOffset = 0;		
		    // these 2 variable determine popup's distance from the cursor
		    // you might want to adjust to get the right result		
	    /* END CONFIG */		
	    $("a.tooltip").hover(function(e){											  
		    this.t = this.title;
		    this.title = "";									  
		    $("body").append("<p id='tooltip'>"+ this.t +"</p>");
		    $("#tooltip")
			    .css("top",(e.pageY - xOffset) + "px")
			    .css("left",(e.pageX + yOffset) + "px")
			    .fadeIn("slow");		
        },
	    function(){
		    this.title = this.t;
		    $("#tooltip").remove();
        });	
	    $("a.tooltip").mousemove(function(e){
		    $("#tooltip")
			    .css("top",(e.pageY - xOffset) + "px")
			    .css("left",(e.pageX + yOffset) + "px");
	    });			
    };

    // starting the script on page load
    $(document).ready(function(){
	    tooltip();
    });
}