function display(x,y) {
		// grabbing previous input between <div> tags
		// intially it is null
		var text=document.getElementById('comment').innerHTML;
		// adding present value to the previous inner value
		// (x,y) ==> present values and text ==> is previous value
		// initally text is null string.
  		text = "<strong>"+x.value+": "+"</strong>"+"<br>"+y.value+"<br>"+text;
 	 	document.getElementById("comment").innerHTML = text;
 	 	x.value="";
 	 	y.value="";
 	 	console.log(document.getElementById("comment"));
	}
// inputs taken here
function call(a) {
	// user id reading..
	var x = document.getElementById("u");
	// comment reading
	var y = document.getElementById("c");
	// password reading..
	var pass = document.getElementById("password");
	// -----------------------------------------
	// check_function checks password is correct or not
	var condition = check();
	// -----------------------------------------
	// if condition is true display_function comments under
	// **comment:** in page 
	if(condition) {
		display(x,y);
	}else {
		alert("Passwords do not match, please try again!");
	}
	// ------------------------------------
	// ---------------------------------------
	function check(){
		var opass = 1234;
		// pass value is string so we check using ==
		// using === convert opass ==> string.
		if(opass == pass.value){
		return true;
		}
		else {
		return false;
		}
	}
}