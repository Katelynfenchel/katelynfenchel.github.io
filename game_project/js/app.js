
$(document).ready(function(){
//function to allow to do several functions and create a array of numbers for the cards
	var games = {
	 	cards:['images/helloKittyBatman.jpg','images/helloKittyBatman.jpg','images/helloKittyExercise.png','images/helloKittyExercise.png',
	 	'images/helloKittyStrawberry.jpg','images/helloKittyStrawberry.jpg','images/helloKittyNinja.png','images/helloKittyNinja.png','images/helloKittyShop.jpg','images/helloKittyShop.jpg',
	 	'images/helloKittyZebra.jpg','images/helloKittyZebra.jpg'],
		init:function(){
			games.shuffle();
		},
		//create a shuffle funtion for array of numbers
		shuffle: function(){
			var random=0;
			var temp=0;
			for(i=0; i<this.cards.length; i++){
				//pick a number randomly from the array
				random= Math.round(Math.random() * i);
				// console.log(random)
				// set the temp to the random number, swap the number in the list to shuffle
				temp= this.cards[i];
				this.cards[i]=this.cards[random];
				this.cards[random]=temp;
			}
			games.assignCard();
			console.log('shuffle card array:'+games.cards)
		},
		 assignCard:function(){
		 	// console.log(this, ' in assignCard')

		 	var self = this;
		 	// $(self).attr("src", '.cards');
		 	//this will pass the index number 
		 	$('.card').each(function(index){
			 	// 	console.log(this, ' in .each function')
			 	// // create a data value and assign value(number) to the card 
			 	// 	console.log(self.cards, ' this is self.cards')
			 	// 	console.log(this.cards, ' this is this.cards')

		 		$(this).attr('data-card-value', games.cards[index]);
		 		 //$(this).attr( games.cards[index]);
		 	}),
		 	games.clickHandlers();
		 },
		 clickHandlers: function(){
			$('.card').on('click', function(){
				console.log($(this).data('cardValue'));
		 		// $(this).html('<p>' + $(this).data('cardValue')+ '</p>').addClass('selected');
		 		//
		 		$(this).html('<img src="' + $(this).data('cardValue') + '"></img>').addClass('selected');	
		 		games.checkMatch();
		 	});
		 },
		 checkMatch: function(){
		 	if($('.selected').length == 2){
		 		if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')){
		 			$('.selected').each(function(){
		 				$(this).animate({opacity: 0}).removeClass('notmatched');
		 			});
		 			$('.selected').each(function(){
						$(this).removeClass('selected');

			});
		 			
		 		games.checkWinner();
			} else{
				setTimeout(function() {
					$('.selected').each(function(){
						$(this).html('').removeClass('selected');
					});

				}, 1000);
			}
			
		}

	},
	checkWinner: function(){
		if($('.notmatched').length === 0){
			$('.container').html('<h3> You are the winner!</h3>');
		}
	}
};
	
	games.init();

});





