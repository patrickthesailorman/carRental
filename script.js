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
       }

var renter = {
    firstName: input.value,
    lastName: input.value,
    name:'firstName' + 'lastName',
    rentalType: input.value
}

// function infoFunction() {
//   document.getElementById("name").innerHTML = Cars.name;

//   document.getElementById("economyAvail").innerHTML = Cars.economyAvail();

//   document.getElementById("price").innerHTML = "$" + Cars.econPrice;
   
//   document.getElementById("midsizeAvail").innerHTML = Cars.midsizeAvail();
	            
//   document.getElementById("price2").innerHTML = "$" + Cars.midsizePrice;
    
// }

function renter() {
    document.getElementById("renter").innerHTML = renter.name;    
}
	            
function rentacar() {
    if(input.firstname ==" " || input.lastname ==" ") {
        alert("all fields must be filled");
    }
	else if 
    ('selected.value'== ''){
      alert('Please select a car type.');
    }
    else {
        document.getElementById("renter").innerHTML = renter.name + "you have reserved a " + Cars.value; 
        if(this.Cars.type == 'economyCar') {
            this.carsBooked ++;
        } 
        else {
            (this.Cars.type == 'midsizeCar') 
            this.midsizeBooked ++;
        } 
       
    }
}

function carSelect() {
    document.getElementById("carType").innerHTML = form.select.option.value;
}
