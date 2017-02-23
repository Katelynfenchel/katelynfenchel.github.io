


$(document).ready(function(){

// use jquery to select the button
// add an event listener
// inside of that call your function to start the game
$('#resetGame').click(function(){
	console.log('reset button')
	$('.container').empty()
	for (var i= 0; i < 12; i ++){
		$('.container').append('<div class="card notmatched"></div>')
	}
	games.counts = 0;
	$('#counter').text(0);
	games.init()	
})
// var count= 0
// var count = 0;
//function to allow to do several functions and create a array of numbers for the cards
	var games = {
		count: 0,
	 	cards:['images/helloKittyBatman.jpg','images/helloKittyBatman.jpg','images/helloKittyExercise.png','images/helloKittyExercise.png',
	 	'images/helloKittyStrawberry.jpg','images/helloKittyStrawberry.jpg','images/helloKittyNinja.png','images/helloKittyNinja.png','images/helloKittyShop.jpg','images/helloKittyShop.jpg',
	 	'images/helloKittyZebra.jpg','images/helloKittyZebra.jpg'],
		init:function(){
			this.shuffle();
			this.assignCard();
			this.clickHandlers();
			games.count = 0;
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
			 	$(this).animate({opacity: 100}).addClass('notmatched');
		 		$(this).attr('data-card-value', self.cards[index]);
		 	})
		 
		 },
		 
		 clickHandlers: function(){
			 var self = this;
			$('.card').on('click', function(){
				console.log($(this).attr('data-card-value'), ' this is this.data')
		 		$(this).html('<img src="' + $(this).attr('data-card-value') + '"></img>').addClass('selected');	
		 		self.checkMatch();

		 		games.count++;
		 		$('#counter').text(self.count);
		 		console.log(games.count, "is the count");
		 	});
		 },
		 checkMatch: function(){
		 	if($('.selected').length == 2){
		 		if ($('.selected').first().attr('data-card-value') == $('.selected').last().attr('data-card-value')){
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
		// console.log('reset is being called')
		this.shuffle();
		this.assignCard();
	},

	removeImage: function(){
		$('.card').each(function(index){
			$(this).empty();
		})
	}
	
}
games.init();
	
});





