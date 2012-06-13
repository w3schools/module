			var ImageArray=new Array(9);
			var ImageDisplayed=new Array(16);						
			function Initialization()
			{
				for(i=0;i<ImageArray.length;i++)
				{
					ImageArray[i]=new Image();
				}
				ImageArray[0].src="Images/Pic1.png";
				ImageArray[1].src="Images/Pic2.png";
				ImageArray[2].src="Images/Pic3.png";
				ImageArray[3].src="Images/Pic4.png";
				ImageArray[4].src="Images/Pic5.png";
				ImageArray[5].src="Images/Pic6.png";
				ImageArray[6].src="Images/Pic7.png";
				ImageArray[7].src="Images/Pic8.png";
				ImageArray[8].src="Images/none.png";
				for(i=0;i<ImageDisplayed.length;i++)
				{
					ImageDisplayed[i]=i%8;
				}
				for(i=0;i<ImageDisplayed.length;i++)
				{
					var tmpImage=ImageDisplayed[i];
					var x=Math.round(Math.random()*(15));
					ImageDisplayed[i]=ImageDisplayed[x];
					ImageDisplayed[x]=tmpImage;
				}
			}
			//***************************************************

			function Display()
			{
				document.write("<table border='0' align='center'>");				
				for(i=0;i<4;i++)
				{
					document.write("<tr>");
					for(j=0;j<4;j++)
					{
						document.write("<td style='background-image:url(\"Images/back.png\"); ");
						document.write("background-repeat:no-repeat'><a href='javascript:void(0)' ");
						document.write("onclick='Click("+ (i*4+j) +")' >");
						document.write("<img src='Images/none.png' width='96' height='96'/>");
						document.write("</a>");
						document.write("</td>");
					}
					document.write("</tr>");
				}
				document.write("</table>");
			}
			//***************************************************
			
			click0=0;
			click1=0;
			click2=0;
			function Click(n)
			{
				if(click0==0)
				{
					click0=1;
					click1=n;
					document.images[n].src=ImageArray[ImageDisplayed[n]].src;
				}
				else if(click0==1)
				{
					click0=0;
					click2=n;
					document.images[n].src=ImageArray[ImageDisplayed[n]].src;
					if(click1==click2 || ImageDisplayed[click1]!=ImageDisplayed[click2])
					{
						setTimeout("ResetImages()",1000);
					}
				}
				//alert(search());
				if(TestWin())
				{
					document.getElementById("hh").innerHTML="You Win !";
				}
			}
			//***************************************************
			
			function TestWin()
			{
				for(i=0;i<document.images.length;i++)
				{
					if(document.images[i].src==ImageArray[8].src)
					{
						return false;
					}
				}
				return true;
			}
			//***************************************************
			
			function ResetImages()
			{
				document.images[click1].src=ImageArray[8].src;
				document.images[click2].src=ImageArray[8].src;
			}