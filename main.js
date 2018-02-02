$(document).ready(function(){
	$('.happyHutURL').click(function(){
	    var code = prompt("Password");
	    if (code == 'woaiguoyiwen') {
	       var url = window.location.href;
	       var index = url.lastIndexOf('/');
	       var newURL = url.slice(0,index)+'/Happy_Hut/happy_hut.html';
	       console.log(newURL);
	       window.location.assign(newURL);
	    } 
	})
})