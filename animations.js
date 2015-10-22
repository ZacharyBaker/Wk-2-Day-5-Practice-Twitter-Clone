$(document).ready(function(){
	
	$('#tweet-submit').hide();
	$('#char-count').hide();
	
	$('.tweet-compose').on('focus', function(){
		$('#tweet-submit').show();
		$('#char-count').show();
		$('.tweet-compose').css('height', '5em');
	});
	
	
	
});