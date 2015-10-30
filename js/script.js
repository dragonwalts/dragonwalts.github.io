var ans =Math.floor (100* Math.Random()+1);

function process(){
	var input = $("#input").val();

	if(input==ans){
		$(#response).html ("Correct!Congratulations!);
	}else if (input<ans){
		$(#response)html ("Wrong, it is higher.");
	}else{
		$(#response).html ("Wrong, it is lower.");
	}
}