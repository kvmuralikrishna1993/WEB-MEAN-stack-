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
	console.log(catalog.products.length)
	for (var i = 0; i < catalog.products.length; i++) {
// -----------------------------------------------------------
		var picture = document.createElement('div');
		picture.className = 'row';
		picture.class = 'col-sm-6';
		picture.style.height = '50%';
		picture.style.width  = '100%';
		picture.id = "p"+i;
		picture.innerHTML = '<img style="height:80%;width:50%;" src="'+catalog.products[i].image+'">';
		document.getElementById('pc').appendChild(picture);
// ----------------------------------------------
		var details = document.createElement('div');
		details.className = 'row';
		details.class = 'col-sm-6 ';
		details.style.height = '20%';
		details.style.width  = '100%';
		details.id = "d"+i;
		text = catalog.products[i].title +'<br>'+catalog.products[i].description+
		'<br>'+catalog.products[i].quantity+'<br>';
		details.innerHTML = '<p style="font-size:25px;" >'+text+'</p>';
		document.getElementById('pc').appendChild(details);

		
		button("Edit",i,"e");
		document.getElementById('pc').appendChild(form(i));
		button("Delete",i,"d");
		// document.getElementById('pc').appendChild(form(i));

		

		var line = document.createElement('div');
		line.className = 'row';
		line.class = 'col-sm-6';
		line.style.height = '1%';
		line.style.width  = '100%';
		line.style.backgroundColor = "red";
		document.getElementById('pc').appendChild(line);
}
}
function form(i) {
	var form = document.createElement('div');
		form.className = "collaps in";
		form.id = "id"+i;
		// form.id = "id"+i;
		form.innerHTML = '<input type="text" placeholder="title" id = "t'+
		i+'" style="font-size:20px"><br><input type="text" placeholder="description" id = "d'+
		i+'" style="font-size:20px"><br><input type="text" placeholder="quantity" id = "q'+
		i+'" style="font-size:20px"><br>';
	return form;	
}

//________________________________________________________________
function button (x,id,y) {
		var cell = document.createElement("button");
				cell.setAttribute("type","button")
				cell.setAttribute("class","btn btn-info");
				cell.setAttribute("data-toggle","collapse");
				cell.setAttribute("data-target","#id"+id);
				cell.setAttribute("onclick","check(id)");
				cell.setAttribute("style","font-size:25px");
				cell.style.backgroundColor = "rgb(40,41,35)";
				cell.style.color = "red";
				cell.style.fontFamily = "courier new";
				cell.style.width = "20%";
				cell.style.height = "10%";
				cell.innerHTML = x;
				cell.id = y+id;
				
		document.getElementById('pc').appendChild(cell);
		}
function check(x) {
	var b = document.getElementById(x).value;
	console.log(b);
}



