$(document).ready(function () {





	$('#tweet-submit').hide();
	$('#char-count').hide();






	$('.tweet-compose').on('focus', function () {
		$('#tweet-submit').show();
		$('#char-count').show();
		$('.tweet-compose').css('height', '5em');

	});

	// $('.tweet-compose').on('blur', function () {
	// 	$('#tweet-submit').hide();
	// 	$('#char-count').hide();
	// 	$('.tweet-compose').css('height', '2.5em');
	// });






	$('#notReply').keydown(function () {
		var userTweet = $('#notReply').val().length;
		if (userTweet <= 140) {
			$('#char-count').text(140 - userTweet);
			if (userTweet >= 130) {
				$('#char-count').css('color', 'red');
			} else {
				$('#char-count').css('color', 'black');
			}
		}

		if (userTweet > 140) {
			$('#tweet-submit').prop('disabled', true);
			$('#char-count').text(140 - userTweet);
		} else {
			$('#tweet-submit').prop('disabled', false);

		}

	});

	//------------------------------------------------------
	$('#tweet-submit').on('click', function () {
		var $tweetOutline = $('#stream').children('.tweet:first');
		var $newTweet = $tweetOutline.clone();
		var $newTweetText = $('#notReply').val();
		
		
		$newTweet.find('.avatar').prop('src', 'img/alagoon.jpg');
		$newTweet.find('.fullname').text('Zachary MF Binks');
		$newTweet.find('.username').text('@MurmuringGinger');
		$newTweet.find('.tweet-text').html($newTweetText);



		$('#stream').prepend($newTweet);
		



	});
	//----------------------------------------------------------------

	$('.tweet-actions').hide();
	
	
	$('body').on('mouseenter', '.tweet', function(){
		// alert("hovering motha effa");
		$(this).find('.tweet-actions').show();
	})

	$('body').on('mouseleave', '.tweet', function(){
		// alert("hovering motha effa");
		$(this).find('.tweet-actions').hide();
	})


//div class="slidingwrapper" is the hook for the sliding elements

	$('.slidingwrapper').hide();


	$('body').on('click', '.tweet', function(){
		$(this).find('.slidingwrapper').slideToggle('slow');
	})

});

