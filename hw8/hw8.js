

var humanScore = 0;
var computerScore = 0;
var humanWins = 0;
var computerWins = 0;

function roll() {

	return Math.floor(Math.random() * 6) + 1;
}

function displayDice(dice) {

	var html = "";
	html += `<img src="./dice/${dice[0]}.png">`;
	html += `<img src="./dice/${dice[1]}.png">`;
	html += `<img src="./dice/${dice[2]}.png">`;
	html += `<img src="./dice/${dice[3]}.png">`;
	html += `<img src="./dice/${dice[4]}.png">`;
	html += `<img src="./dice/${dice[5]}.png">`;





	return html;
}

function play() {

	var humanRolls = [];
	humanRolls[0] = roll();
	humanRolls[1] = roll();
	humanRolls[2] = roll();
	humanRolls[3] = roll();
	humanRolls[4] = roll();
	humanRolls[5] = roll();
	console.log(humanRolls[0], humanRolls[1], humanRolls[2], humanRolls[3], humanRolls[4], humanRolls[5]);
	humanScore = humanScore + humanRolls[0] + humanRolls[1] + humanRolls[2] + humanRolls[3] + humanRolls[4] + humanRolls[5];
	console.log("Total: ", humanScore);


    document.getElementById("human").classList.remove("winner");
    document.getElementById("computer").classList.remove("winner");


	document.getElementById("errors").innerHTML = "";


	var computerRolls = [];
	computerRolls[0] = roll();
	computerRolls[1] = roll();
	computerRolls[2] = roll();
	computerRolls[3] = roll();
	computerRolls[4] = roll();
    computerRolls[5] = roll();
    console.log("computer:", computerRolls[0], computerRolls[1], computerRolls[2], computerRolls[3], computerRolls[4], computerRolls[5]);
	computerScore = computerScore + computerRolls[0] + computerRolls[1] + computerRolls[2] + computerRolls[3] + computerRolls[4] + computerRolls[5];
    console.log("computer Total: ", computerScore);

	document.getElementById("humanDice").innerHTML = displayDice(humanRolls);
	document.getElementById("humanScore").innerHTML = humanScore;


    document.getElementById("computerDice").innerHTML = displayDice(computerRolls);
	document.getElementById("computerScore").innerHTML = computerScore;


	document.getElementById("computerDice").style.visibility = "hidden";
	document.getElementById("computerScore").style.visibility = "hidden";


	if (humanScore >= 100 || computerScore >= 100) {
		stand();
	}
}

function humanWinsGame() {
	humanWins++;
    document.getElementById("humanWin").innerHTML = humanWins;
    document.getElementById("human").classList.add("winner");
}
function computerWinsGame() {
    computerWins++;
    document.getElementById("computerWin").innerHTML = computerWins;
    document.getElementById("computer").classList.add("winner");


}

function stand() {

	
		document.getElementById("computerDice").style.visibility = "visible";
		document.getElementById("computerScore").style.visibility = "visible";
		
		
		
		if (humanScore > 0 && computerScore > 0) {
			
			
			
			if (humanScore < 100 && computerScore < 100) {
				
				if (humanScore > computerScore) {
					humanWinsGame();
				}
				else {
					computerWinsGame();
				}
				
			}
			
			else if (humanScore >= 100 && computerScore < 100) {
				
				computerWinsGame();
			}
			else if (humanScore < 100 && computerScore >= 100) {
				
				humanWinsGame();
			}
			
		} else {
			
			document.getElementById("errors").innerHTML = "You must play the game before standing!!!!";
			
			
		}
		


	humanScore = 0;
	computerScore = 0;

}

