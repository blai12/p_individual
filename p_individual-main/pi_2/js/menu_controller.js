function start_game(){
	name = prompt("User name");
	loadpage("./html/game.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	loadpage("../index.html")
	name = "";
}

function options(){
	// TODO: Open options menu
	console.log("Options menu button");
}


