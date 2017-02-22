


$(document).ready(function(){

// use jquery to select the button
// add an event listener
// inside of that call your function to start the game
$('#resetGame').click(function(){
		games.reset();

})




//function to allow to do several functions and create a array of numbers for the cards
	var games = {
		count: '',
	 	cards:['images/helloKittyBatman.jpg','images/helloKittyBatman.jpg','images/helloKittyExercise.png','images/helloKittyExercise.png',
	 	'images/helloKittyStrawberry.jpg','images/helloKittyStrawberry.jpg','images/helloKittyNinja.png','images/helloKittyNinja.png','images/helloKittyShop.jpg','images/helloKittyShop.jpg',
	 	'images/helloKittyZebra.jpg','images/helloKittyZebra.jpg'],
		init:function(){
			this.shuffle();
			this.assignCard();
			this.clickHandlers();
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
			 	// add the the selected and not matched back to all the cards

			 	$(this).animate({opacity: 100}).addClass('notmatched');
		 		$(this).attr('data-card-value', self.cards[index]);

		 		// $(this).html(('<img src="' + $(this).data('cardValue') + '"></img>'))
		 		//http://www.cartoon-clipart.co/amp/images/hello-kitty4.png
		 		//$(this).data('cardValue')
		 		 //$(this).attr( games.cards[index]);
		 	})
		 
		 },
		 
		 clickHandlers: function(){
			 var self= this;
			 //console.log(this, ' this is this')
			$('.card').on('click', function(){
				// console.log('click handler is happening')
				console.log($(this).data('cardValue'));
				console.log($(this).data('cardValue'));
		 		$(this).html('<img src="' + $(this).data('cardValue') + '"></img>').addClass('selected');	
		 		self.checkMatch();
		 		this.count += 1;
		 		$('#counter').text(self.count);
				// console.log(count);
		 	});
		 },
		 checkMatch: function(){
		 	//console.log('chekc math')
		 	if($('.selected').length == 2){
		 		console.log('check match is happen ing')
		 		if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')){
		 			$('.selected').each(function(){
		 				$(this).animate({opacity: 0}).removeClass('notmatched');
		 			});
		 			$('.selected').each(function(){
						$(this).removeClass('selected');

			});
		 			
		 		this.checkWinner();
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
			$('.container').html('<h3> You Won, Horray!! </h3>');
		}
	},
	reset:function (){
		this.removeImage();
		this.shuffle();
		this.assignCard();
		this.clickHandlers();
		this.upDateImages();
		
	},

	removeImage: function(){
		$('.card').each(function(index){
			$(this).empty();
		})
	},

	upDateImages: function(){
		$('img').each(function(index){
			//grab the parent data card value and set it to the source image
		})
	}
}
	
games.init();
	
});





