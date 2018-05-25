
	function gamer(ct = 0, guess = ""){

		var arr = ['azure', 'black', 'blue', 'brown', 'cyan', 'gold', 'gray', 'green', 'magenta', 'navy', 'orange', 'pink', 'red', 'silver'];//our list of options

		var colors = ""; //colors 

		//this for loop helps us display the colors nicely in the prompt box
		for(var i = 0; i < arr.length; i++){
			if(i == arr.length){
				colors += arr[i]+'.';
			} else {
				colors += arr[i] + ', ';
			}	
		}

		count = ct;


		var ans = prompt('I am thinking of one of these colors \n\n' + colors);//we store the users answer into the 'ans' variable

		//if the user answer we implement count
		if(ans){
			count = count + 1;
		}
		

		var computerGuess = (guess == "") ? arr[Math.floor(Math.random()*arr.length)] : guess;// the computer guesses

		//we first check if the users answer is in the given option
		//if not, we ask if user would like to comtinue, if yes we continue if no, we'll put the correct answer and end the game
		if(arr.includes(ans)){
			// console.log('ok');
			indexA = arr.indexOf(ans);
			indexB = arr.indexOf(computerGuess); 
			if(indexA == indexB){
				alert("You are right! You took "+count+" guess(es)!");
				again = confirm("will you like to play again?");
				if(again){
					gamer(0);
				}
			} else if(indexA < indexB){
				if(count > 5){
					alert("Game Over, the answer was "+ computerGuess);
					again = confirm("will you like to play again?");
					if(again){
						gamer(0);
					}
				} else {
					alert("Your input is alphabetically lower than mine!");
					return gamer(count, computerGuess);
				}
			} else if(indexA > indexB){
				if(count > 5){
					alert("Game Over, the answer was "+ computerGuess);
					again = confirm("will you like to play again?");
					if(again){
						gamer(0);
					}
				} else {
					alert("Your input is alphabetically higher than mine!")
					return gamer(count, computerGuess);
				}
			}
		} else {
			//console.log('no');
			if(!confirm("Your answer is not an option, would you like to quit the game?")){
				gamer(count);
			} else {
				alert("Nice try, the answer was "+ computerGuess);
			}
		}

}

