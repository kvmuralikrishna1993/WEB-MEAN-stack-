// ===========================================
// 				:BOMB_GAME: 
// ===========================================
// tcreate will be called when page is loaded..
//***check function on the body in html page***

function tcreate() {
	//getting the intial table value.
	var t1 = document.getElementById("t1");
	//intialising the table.
	refresh(t1);

}

// refresh and intialise table..
function refresh(t1) {

	// intially changing id values and count to reset.
	id=0;
	count=0;
	document.getElementById("u").value = "";
// ------------------------------------------------
	for (var i = 0; i < 3; i++) {

		var row = document.createElement("tr");

		// -----------------------------------------
			for (var j = 0; j < 3; j++) {
				var cell = document.createElement("button");
				cell.setAttribute("type","button")
				cell.setAttribute("class","grid-item");
				cell.setAttribute("onclick","check(id)");
				// cell.setAttribute("style","background-color:red,")
				cell.setAttribute("style","font-size:75px");
				cell.style.backgroundColor = "rgb(40,41,35)";
				cell.style.color = "white";
				cell.style.fontFamily = "courier new"
				row.appendChild(cell);
				id++;
				cell.id = id;
				cell.innerHTML = id;
			}
		// -----------------------------------------

		t1.appendChild(row);
	}
// ---------------------------------------------
}

//random function to set random value between
//low(l) and high (h)
function randomRange(l,h) {
    var range = (h-l);
    var random = Math.floor(Math.random()*range);
    if(random === 0) {
        random += 1;
    }
    return(l+random);
}

// ===================================================
//intialising the count.
var count = 0;
//storing random value between(0,10)
var bombid = randomRange(0,10);
//=====================================================

// -----------------------------------------------------------------
// check_function to check win or lose
function check(id) {

	//print random id
	console.log("random "+bombid);
	console.log("count "+count);

	// reading user name..
	var user = document.getElementById("u").value;

	if(count < 9) { //checking count
		var inval = document.getElementById(id).innerHTML;
		if(bombid == inval) {

			//if number found the below changes happen for cell
			document.getElementById(id).style.backgroundColor = "white";
			document.getElementById(id).style.color ="black";
			document.getElementById(id).innerHTML = "BOMBFOUND";
			alert("YOU WIN");
			display(user,count);
			// location.reload();
		} else {

			// hiding for every unsuccesful attempt
			document.getElementById(id).style.visibility = "hidden";
			count++;
		}
	}
	if(count == 8) { 

	//termination condition
		alert("GAME OVER");
		display(user,count);
		// location.reload();
	}
}
// -------------------------------------------------------------------------
// diplay function to display scores
function display(user,count) {
		//max attempts
		var max = 9;
		
		// grabbing previous input between <div> tags
		// intially it is null
		var text=document.getElementById("score").innerHTML;

		// adding present value to the previous inner value
		// (x,y) ==> present values and text ==> is previous value
		// initally text is null string.
  		text = "<strong>"+user+": "+"</strong>"+"<br>"+"Number of attempts:"+(count+1)+
  		"<br>"+"Score:"+(max-count-1)+"<br>"+text;
 	 	document.getElementById("score").innerHTML = text;

 	 	// reseting the user name and table
 	 	//making null table 
 	 	var t1 = document.getElementById("t1");
 	 	t1.innerHTML="";

 	 	//creaating new table
 	 	refresh(t1);

 	 	//reseting random number
 	 	bombid = randomRange(0,10);
	}
