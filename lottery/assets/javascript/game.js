$(document).ready(function(){
	var random = [];
	var min = 1;
	var max = 6;

	$('#generator').on("click", function(){
		
		var holder = "";

		for(var i = 0; i <= 6; i++){
			var comppicks = Math.floor(Math.random()* max) + min;
			holder = holder + comppicks;
				
		};
		console.log(holder);
		$('#random').prepend("<div>" + holder + "<div>");

	});


});