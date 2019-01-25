// ---------------------------------
var text = "";
function call(a) {
	var x = document.getElementById("n");
	var y = document.getElementById("c");
	var pass = document.getElementById("password");
	console.log(pass);
	// -----------------------------------------
	var condition = check();
	if(condition) {
		myFucntion();
	}else {
		alert("Passwords do not match, please try again!");
	}
	// ------------------------------------
	function myFunction() {
  		var text = text+x+":"+y+"\n";
 	 	document.getElementById("comment").innerHTML = text;
	}
	// ---------------------------------------
	function check(){
		var opass = 1234;
		if(opass.value === pass.value){
		return true;
		}
		else {
		return false;
		}
	}
}