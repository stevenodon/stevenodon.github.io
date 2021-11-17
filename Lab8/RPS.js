function game(){
    var userPick;
    var result;
    userPick=prompt("Enter your answer rock, paper or scissors.","");
    const options=["rock","paper","scissors"];
    let compPick=options[Math.floor(Math.random()*3+1)];
    
		if(userPick==compPick){
			result="draw.";
		}
		//user picks rock
		else if(userPick=="rock"){
			if(compPick=="paper"){
				result="loss for you.";
			}
			else{
				result="win for you!";
			}
		}
		//user picks paper
		else if(userPick=="paper"){
			if(compPick=="scissors"){
				result="loss for you.";
			}
			else{
				result="win for you!";
			}
		}
		//user picks scissors
		else if(userPick=="scissors"){
			if(compPick=="rock"){
				result="loss for you.";
			}
			else{
				result="win for you!";
			}
		}
    document.getElementById("placeholder").innerHTML="Computer picked "+options.pop(compPick)+". It's a "+result;
}