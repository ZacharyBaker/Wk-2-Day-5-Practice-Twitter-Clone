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
			console.log(userTweet);
			$('#char-count').text(140 - userTweet);
	});
	
	
});