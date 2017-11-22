/*global input*/
/*global form*/
var Cars = {
	name: 'Enterprise Rental Cars',
	types: [{
		type: 'economyCar',
		economyCars: 500,
		carsBooked: 150,
		econPrice: 20,
	},
	{
		type: 'midsizeCar',
		midsizeCars: 500,
		midsizeBooked: 100,
		midsizePrice: 35,
	}],
	
	economyAvail: function() {
		return this.types[0].economyCars - this.types[0].carsBooked;
	},
	
	midsizeAvail: function() {
		return this.types[1].midsizeCars - this.types[1].midsizeBooked;
	},
	
	rentEconomy: function() {
		return this.types[0].carsBooked ++ && this.types[0].economyAvail();
	},
	
	rentMidsize: function() {
		return this.types[1].midsizeBooked + 1 && this.types[1].midsizeAvail();
	},
}

var renter = {
		renters: []
};

var firstName = document.getElementById("inputFirstName").value
var lastName = document.getElementById("inputLastName").value 
var carSelected = document.getElementById("carType").value;

function addRenter() {
	
	
		if (firstName == "" || lastName == "") {
		alert("all fields must be filled");
		} else if 
			(document.getElementById("carType").value == "Please select a vehicle") {
				alert("Please select a vehicle");
	} else {
		
		renter.renters.push({
			custFirstName: firstName,
			custLastName: lastName,
			carType: carSelected
			});
		displayRenter();
	}
}	

function displayRenter() {
	document.getElementById("customer").innerHTML = firstName + " " + lastName;
}	
	
function carSelect() {
	
	renter.renters.push({
		carType: carSelected
	});
	displayInfo();
}

function displayInfo() {
	
	document.getElementById("yourCarType").innerHTML = carSelected;
	if(carSelected == Cars.types[0]) {
		document.getElementById("economyAvail").innerHTML = Cars.economyAvail();
		document.getElementById("price").innerHTML = '$' + Cars.types[0].econPrice;
	} else {
		document.getElementById("midsizeAvail").innerHTML = Cars.midsizeAvail();
		document.getElementById("price2").innerHTML = '$' + Cars.types[1].midsizePrice;
	}
}
	
	
window.onload = function() {
	document.getElementById("name").innerHTML = Cars.name;
};


			
				
				
				
				// function rentacar() {
				// 	var carSelected = document.getElementById("carType").value;
				// 	if (document.getElementById("firstName").value == " " || document.getElementById("lastName").value == " ") {
				// 		alert("all fields must be filled");
				// 	} else if (document.getElementById("carType").value == ' ') {
				// 		alert('Please select a car type.');
				// 	} else {
				// 		document.getElementById("customer").value + "you have reserved a " + carSelected;
				// 		if (Cars.types[0]) {
				// 			Cars.rentEconomy();
				// 		} else {
				// 			(this.Cars.types[1])
				// 			Cars.rentMidsize();
				// 		}
				// 	}
				// }
				
