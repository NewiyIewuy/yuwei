$(document).ready(function(){
	$('.main-tab').click(function(event){
		$('.tab-all-card').hide();
		var el = event.target;
		console.log(el.parentElement.classList[el.parentElement.classList.length-1]);
		$('.'+el.parentElement.classList[el.parentElement.classList.length-1] + '-card').show();
	})
})