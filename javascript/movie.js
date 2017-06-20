var movies = [ {title: "Cars",
				watched: 1,
				stars: 4},
			   {title: "Toy Story",
				watched: 1,
				stars: 5},
			   {title: "Frozen",
				watched: 0,
				stars: 4.3},
			   {title: "Brave",
				watched: 0,
				stars: 3}];

movies.forEach(function(mov){
	if(mov.watched === 1)
		console.log("You have watched "+mov.title+"- "+mov.stars+" stars");
	else
		console.log("You have not watched "+mov.title+"- "+mov.stars+" stars");
})