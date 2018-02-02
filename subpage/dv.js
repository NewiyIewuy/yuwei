$(document).ready(function() {
	console.log("Ready!");

    $('#fullpage').fullpage({
			anchors: ['firstPage', 'secondPage', '3rdPage','4thPage','5thPage'],
			sectionsColor: ['#8FB98B','#14191b', '#e7efff','#e7efff','#DE564B', '#EAE1C0'],
			slidesNavigation: true,
			onLeave: function(index, nextIndex, direction){
				if(nextIndex == 2){
					$('.dot-holder').removeClass('ui-two-x-two');
					setTimeout(function(){
						$('.dot-holder').addClass('ui-two-x-two')
					},100);
				}
			},
		});

	var clickCount =0;
	
	$('#section4').click(function(){
		
		clickCount++;
		console.log(clickCount);
		if(clickCount==1){
			$('.message-text').html('zhao.yuw@husky.neu.edu');
		} else if (clickCount==2) {
			$('.message-text').html('THANKS');
		} else{
			$('.message-text').html('THANKS');
		}
	});

	$('.view-again').click(function(){
		console.log("view again");
		$('.dot-holder').hide();
		setTimeout(function(){
				$('.dot-holder').removeClass('ui-two-x-two');
		},100);
	
		setTimeout(function(){
			$('.dot-holder').show();
		},100);

		setTimeout(function(){
			$('.dot-holder').addClass('ui-two-x-two');
		},100);
		
	})
	$( ".key" )
	 .on( "mouseenter", function() {
		console.log($(this).data('key'));
		$("." + $(this).data('key')).addClass('key-hover');
  		})
	  .on( "mouseleave", function() {
	    console.log($(this).data('quit'));
	    $("." + $(this).data('key')).removeClass('key-hover');
		});
});
