

var dd= 1;

window.onload = function(){

	var b = 0;
	var c = 0;
	var d = 0;
	var e = 0;
	var f = 6;
    
    function firstcard(){ 
    	d = Math.ceil(Math.random()*13);
	   	if (d > 10) { e = e +10;}
		else {e = e + d;}
	
       if (d==11) {
			d = "J"
		}
		else if (d==12) {
			d = "Q"
		}
		else if (d==13) {
			d = "K"
		}


	document.getElementById("card-wrapper"+f).style.border = "1px solid #000"
	document.getElementById("card-wrapper"+f).innerText = d;
	document.getElementById("total1").innerHTML = "Total:" + " " +e;

}

	document.getElementById("again").addEventListener("click", reload);
	   function reload(){
	   			location.reload();
	   }
	document.getElementById("pass").addEventListener("click", pass);

       function maker(){

   			   var d = Math.ceil(Math.random()*13);
   			if (d > 10) { e = e +10;}
			else {e = e + d;}
		
			if (d==11) {
				d = "J"
			}
			else if (d==12) {
				d = "Q"
			}
			else if (d==13) {
				d = "K"
			}
			f++;

			document.getElementById("card-wrapper"+f).style.border = "1px solid #000"
		    document.getElementById("card-wrapper"+f).style.margin = "0 0"
		    document.getElementById("card-wrapper"+f).innerHTML = d;
            document.getElementById("total1").innerHTML = "Total:" + " " +e;
     		var again = setTimeout(makerjudge,100);
		    function makerjudge(){

                if (e > 16 || f == 10) {
                	 clearTimeout(again);
				        if (e<22 && e >= b) { 
				    	
				    	  alert("Sorry, You Lose!");
				    	  location.reload();
				        }
				
						else {
							  alert("You Win!");
							  location.reload();		   
						}

			    }

		    	else {
		    	setTimeout(maker,700);
		   		 }
		 	}

   		}
       function pass(){
   		// alert("Got it! Total is "+b+"!");
   		// 	location.reload();
   
        maker();

   	
    }





		document.getElementById("ctn").addEventListener("click", ctn);

		function ctn() {
			var a =Math.ceil(Math.random()*13);
			if (a > 10) { b = b +10;}
			else {b = b + a;}
		
			if (a==11) {
				a = "J"
			}
			else if (a==12) {
				a = "Q"
			}
			else if (a==13) {
				a = "K"
			}
			c++;
	
			
		    // document.getElementById("ctn").innerHTML = a;
		    document.getElementById("card-wrapper"+c).style.border = "1px solid #000"
		    document.getElementById("card-wrapper"+c).style.margin = "0 0"
		    document.getElementById("card-wrapper"+c).innerHTML = a;
		    document.getElementById("total2").innerHTML = "Total:" + " " +b;


		    setTimeout(judge, 100);
		    function judge(){
		    if (b ==21) {
				alert("Congratulations! Blackjack!")
			}

		    else if (b>21) {
				alert("Game is Over!")
				location.reload();
			
			}  
		    else if(c ==5){
				alert("Got it! Total is "+b+"!")
			}

			}

		}
var makerCard = setTimeout(firstcard,300);
var card1 = setTimeout(ctn,600);
var card2 = setTimeout(ctn,900);






}
