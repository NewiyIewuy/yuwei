 // $(window).load(function() {
 // 	alert("Welecome to Yuwei's Website!");
 // });
           
		
$(document).ready(function(){
			 $(".scroll-wrapper").hide();
			  window.onscroll = function () {
			 	if($(window).scrollTop() > 300 ){
				    $(".scroll-wrapper").show(200);
				}else{
					$(".scroll-wrapper").hide(200);
				}
			}
			$(".scroll-wrapper").click(function() {
			  $("html, body").animate({ scrollTop: 0 }, "slow");
			  // $(".scroll-wrapper").hide(200);
			  return false;
			});
			
});
// $(document).ready(function(){

// 	var floatImg = document.getElementById("resumee");  
// 		var delay = 10; //delay 
// 		var speed = 1; //speed 
// 		var flagX = 0; 
// 		var flagY = 0; 

//         function toPixel(str1) {          //change px to num
// 	        var oldLen = str1.length; 
// 	        var newLen = oldLen - 2; 
	         
// 	        str2 = str1.slice(0, newLen); 
// 	        str3 = parseInt(str2); 
	  
// 	        return str3; 
//    		 }    
		// function flowImg() { 
	 //        var bWidth = document.body.clientWidth; 
	 //        var bHeight = document.documentElement.clientHeight; 
	 //        var bLeft = document.body.scrollLeft; 
	 //        var bTop = document.body.scrollTop; 
	         
	 //        var iWidth = floatImg.offsetWidth; 
	 //        var iHeight = floatImg.offsetHeight; 
	 //        var iLeft = toPixel(floatImg.style.left); 
	 //        var iTop = toPixel(floatImg.style.top); 
	        
	 //        //horizontal move
	 //        if(iLeft < (bWidth - iWidth) && flagX == 0) { 
	 //            floatImg.style.left = (iLeft + speed) + "px"; 
	 //        } 
	 //        else if(iLeft >= (bWidth - iWidth) && flagX ==0) { 
	 //            flagX = 1; 
	 //        } 
	 //        else if(iLeft > 0 && flagX == 1) { 
	 //            floatImg.style.left = (iLeft - speed) + "px"; 
	 //        } 
	 //        else if(0 >= iLeft && flagX == 1) { 
	 //            flagX = 0; 
	 //        }
	 //            //vertical move   
	 //        if( flagY == 0) { 
	 //            floatImg.style.top = (iTop + speed) + "px"; 
	 //        } 
	 //        else if(flagY == 1) { 
	 //            floatImg.style.top = (iTop - speed) + "px"; 
	 //        } 
	 //        if(iTop < bTop) { 
	 //        	floatImg.style.top = bTop + "px"; 
	 //        	flagY = 0;
	 //        }
	 //        if(iTop > bTop + bHeight - iHeight) { 
	 //        	floatImg.style.top = bTop + bHeight - iHeight  + "px"; 
	 //        	flagY = 1;
	 //        }
	 //    }







