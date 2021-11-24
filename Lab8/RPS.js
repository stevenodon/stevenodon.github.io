//Created a click counter that reloads the page when the value goes above 2. 

var clickNumber =0;
function incrementClick(){
	updateDisplay(++clickNumber);
}

function updateDisplay(valueNum){
	document.getElementById("counter-label").innerHTML="Attempt: "+valueNum;
	if(valueNum>2){
		alert("You have tried 3 times. No more attempts left.");
		location.reload();
	}
	else if(message=="You win"){
		alert("You have won! Ready to start again?");
		location.reload();
	}
}

function RPSrun(optionPick){
		let userPick=optionPick;
		const compArray=["rock","paper","scissors"];
		let compPick=compArray[parseInt(Math.random()*3)];
		if(userPick==compPick){
			message="It's a draw"
		}
		else if(userPick=="rock"){
			if(compPick=="paper"){
				message="You lose";
			}
			else{
				message="You win";
			}
		}
		else if(userPick=="paper"){
			if(compPick=="scissors"){
				message="You lose"
			}
			else{
				message="You win";
			}
		}
		else if(userPick=="scissors"){
			if(compPick=="rock"){
				message="You lose";
			}
			else{
				message="You win";
			}
		}
		alert("You picked "+userPick+". The computer picked "+compPick+". The result: "+message);
}