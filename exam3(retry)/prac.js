var catalog = ({
	"products": [{
			"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			"image": "1.jpeg",
			"quantity":"10"
		},
		{
			"title": "Mi A2 4GB + 64GB | 6GB + 128GB",
			"description": "15.2cm (5.99) large display",
			"image": "2.jpeg",
			"quantity":"20"
		},
		{
			"title": "Apple iphone 32GB",
			"description": "11.4 cm(4.7)display",
			"image": "3.jpeg",
			"quantity":"30"
		},
		{
			"title": "red mi note 6 pro",
			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
			"image": "4.jpeg",
			"quantity":"40"
		}
	]
});
// console.log(catalog.products[1].title);
function tcreate() {
	// console.log(catalog.products.length)
	for (var i = 0; i < catalog.products.length; i++) {
// -----------------------------------------------------------
var all =  document.createElement('div');
all.class = 'row';
all.class = 'col-sm-12';
all.style.height = '50%';
all.style.width  = '100%';
all.style.border = "thick solid black";
all.id = "all"+i;
document.getElementById('pc').appendChild(all);

// --------------------------------------------------------------
		var picture = document.createElement('div');
		picture.className = 'col-sm-6';
		picture.style.height = '100%';
		picture.style.width  = '30%';
		picture.id = "p"+i;
		picture.innerHTML = '<img style="max-height:100%;max-width:100%;" src="'+catalog.products[i].image+'">';
		document.getElementById('all'+i).appendChild(picture);
// ----------------------------------------------
		var details = document.createElement('div');
		details.className = 'col-sm-6 pull-right';
		details.style.height = '100%';
		details.style.width  = '40%';
		details.id = "d"+i;
		text = catalog.products[i].title +'<br>'+catalog.products[i].description+
		'<br>'+catalog.products[i].quantity+'<br>';
		details.innerHTML = '<p style="font-size:20px;" >'+text+'</p>';
		document.getElementById('all'+i).appendChild(details);

		button("Edit",i,"e");
		button("Delete",i,"d");
		
		var line = document.createElement('div');
		line.className = 'row';
		line.class = 'col-sm-6';
		line.style.height = '10%';
		line.style.width  = '100%';
		line.style.backgroundColor = "white";
		document.getElementById('pc').appendChild(line);
	}
}
//--------------------------------------------------------------------
function createform(i) {
		// i = editid(id);
	 	var form = document.createElement('form');
		form.className = "form";
		form.id = "f"+i;
		form.innerHTML = '<input type="text" placeholder="title" id = "t'+
		i+'" style="font-size:20px"><input type="text" placeholder="description" id = "d'+
		i+'" style="font-size:20px"><input type="text" placeholder="quantity" id = "q'+
		i+'" style="font-size:20px">'+'<button type="submit" onclick = "edit(id)">Submit</button>';
		return form;
		
}

//----------------------------------------------------------------------
function button (type,id_no,check) {
		var cell = document.createElement("button");
				cell.setAttribute("type","button")
				cell.setAttribute("class","btn");
				cell.setAttribute("style","font-size:25px");
				cell.style.backgroundColor = "rgb(40,41,35)";
				cell.style.color = "red";
				cell.style.fontFamily = "courier new";
				cell.style.width = "20%";
				cell.style.height = "10%";
				cell.style.border = "thick solid white";
				// cell.setAttribute("onclick","createform(id)");
				cell.innerHTML = type;
				cell.id = check+id_no;
		if (check == "e") {
			// document.getElementById('e'+i).appendChild(createform(id_no));
			} else {
			cell.setAttribute("onclick","delet(id)")
		}
		document.getElementById('pc').appendChild(cell);

}

// function editid(argument) {
// 	var arr = argument.split("");
// 	return arr[1];
// }
function edit(id){
	console.log("edit");
}
function delet(id){
	console.log("delete");
}


