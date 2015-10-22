$(document).ready(function(){
	
	$('#tweet-submit').hide();
	$('#char-count').hide();
	
	
	
	
	
	
	$('.tweet-compose').on('click', function(){
		$('#tweet-submit').show();
		$('#char-count').show();
		$('.tweet-compose').css('height', '5em');
		
	});
	
	
	
	
	
	
	$('#notReply').keydown(function() {
				var userTweet = $('#notReply').val().length;
			if (userTweet <= 140){
				$('#char-count').text(140 - userTweet);
				//use a while loop for the userTweet length being 10 or less.
			if (userTweet >= 130){
				$('#char-count').css('color', 'red');
			}
		} 
	});
	
	
});