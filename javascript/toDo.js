

var input = "hi";
var toDo = [];

while(input !== "quit"){
	input = prompt("What do you want to do?");
	if(input === "new"){
		var ne = prompt("Insert");
		toDo.push(ne);
	}
	else if(input === "list"){
		
		for(var i=0; i<=toDo.length-1;i++){
			console.log(i+": "+toDo[i]);
		}
	}else if(input === "delete"){
		
		if(toDo.length === 0)
			alert("There's nothing to erase");
		else{
			var index = prompt("Insert index");
			if(-1 < index && index<toDo.length){
				toDo.splice(index,1);
				
			}else
				alert("Insert a valid index");
			
		}

	} 	
}