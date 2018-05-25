
	function gamer(ct = 0, guess = ""){

		var arr = ['azure', 'black', 'blue', 'brown', 'cyan', 'gold', 'gray', 'green', 'magenta', 'navy', 'orange', 'pink', 'red', 'silver'];

		var colors = "";

		for(var i = 0; i < arr.length; i++){
			if(i == arr.length){
				colors += arr[i]+'.';
			} else {
				colors += arr[i] + ', ';
			}	
		}

		count = ct;

		var ans = prompt('I am thinking of one of these colors \n\n' + colors);

		if(ans){
			count = count + 1;
		}
		console.log(ans);
		if(arr.includes(ans)){
			var computerGuess = (guess == "") ? arr[Math.floor(Math.random()*arr.length)] : guess;
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
				if(count > 7){
					alert("Game Over");
					again = confirm("will you like to play again?");
					if(again){
						gamer(0);
					}
				} else {
					alert("Your input is alphabetically lower than mine!");
					return gamer(count, computerGuess);
				}
			} else if(indexA > indexB){
				if(count > 7){
					alert("Game Over");
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
			}
		}

}

