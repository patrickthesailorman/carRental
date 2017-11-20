/*global input*/
/*global form*/
var Cars = {
	name: 'Enterprise Rental Cars',
	types: ['economyCar', 'midsizeCar'],
	economyCars: 500,
	carsBooked: 150,
	midsizeCars: 500,
	midsizeBooked: 100,
	econPrice: 20,
	midsizePrice: 35,
	economyAvail: function() {
		return this.economyCars - this.carsBooked;
	},
	midsizeAvail: function() {
		return this.midsizeCars - this.midsizeBooked;
	},
	rentEconomy: function() {
		return this.carsBooked + 1 && this.economyAvail();
	},
	rentMidsize: function() {
		return this.midsizeBooked + 1 && this.midsizeAvail();
	},
}

window.onload = function() {
	document.getElementById("name").innerHTML = Cars.name;
	document.getElementById("economyAvail").innerHTML = Cars.economyAvail();
	document.getElementById("price").innerHTML = '$' + Cars.econPrice;
	document.getElementById("midsizeAvail").innerHTML = Cars.midsizeAvail();
	document.getElementById("price2").innerHTML = '$' + Cars.midsizePrice;
};

var renter = {
		firstName: document.getElementById("firstName").value,
		lastName: document.getElementById("lastName").value,
		name: 'firstName' + 'lastName',
		rentalType: document.getElementById("carType").Value,
		renters: [{
					firstName: "Joe",
					lastName: "Blow",
					name: "Joe Blow",
					rentalType: "economyCar",
				}]
}
				function addRenter(renter) {
					if (document.getElementById("firstname").value == " " || document.getElementById("lastname").value == " ") {
						alert("all fields must be filled");
					} else {
						this.renters.push(renter);
						renter();
					}
				}
				function renter() {
					document.getElementById("renter").innerHTML = this.renter.name;
				}
				function rentacar() {
					if (document.getElementById("firstName").value == " " || document.getElementById("lastName").value == " ") {
						alert("all fields must be filled");
					} else if (document.getElementById("carType").value == ' ') {
						alert('Please select a car type.');
					} else {
						document.getElementById("renter").innerHTML = this.renter.name + "you have reserved a " + this.Cars.value;
						if (this.Cars.type == 'economyCar') {
							this.rentEconomy();
						} else {
							(this.Cars.type == 'midsizeCar')
							this.rentMidsize();
						}
					}
				}
				function carSelect() {
					document.getElementById("carType").innerHTML = document.getElementById("carType").value;
				}
