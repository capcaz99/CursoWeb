//Invert array
function printReverse(arr){
	arr.reverse();
	arr.forEach(function(element){
		console.log(element);
	});
}

function isUniform(arr){
	var i = 0;
	while(arr[0] === arr[i] && i<arr.length)
		i++;
	if(i === arr.length)
		return true;
	else
		return false;
}

function sum(array){
	var result = 0;
	for(var i = 0; i<array.length;i++)
		result=result+array[i];
	return result;
	
}

function max(array){
	var max = 0;
	for(var i = 0; i<array.length;i++){
		if(array[i]>array[max])
			max = i;
	}
	return array[max];

}

