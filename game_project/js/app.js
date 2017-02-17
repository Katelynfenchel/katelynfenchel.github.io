//show back of card 



// $( 'img' ).click(function(){
// 	console.log('its working')
// 	//when you click the function make the card flip
// 	$( this ).prop('src', 'images/backOfCard.png');
	
// });

//function is it the first or second click
//if it is the first click leave  then tunr the second click

// $(document).ready(function(){
//function to allow to do several functions and create a array of numbers for the cards
	console.log("hi")

	var game = {
	 cards:[1,1,2,2,3,3,4,4,5,5,6,6],
		init:function(){
			shuffle();
		},
		//create a shuffle funtion for array of numbers
		shuffle: function(){
			var random=0;
			var temp=0;
			//create a for loop to go through the array of cards and pick randomly
			for(i=0; i<this.cards.length; i++){
				random=Math.floor(Math.random() * i);
				console.log(random)
				// temp var is equal to a array of numbers
				temp=this.cards[i];
				//temp will equal another array of numbers at random
				this.cards[i]=this.cards[random];
				//that random array will now equal the temp variable
				this.cards[random]=temp;
			}
			console.log(game.cards)
		},
		//create a click function
		clickHandlers: function(){

		},
	}

// game.init()
// });