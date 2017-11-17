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

var renter = {
    name:'firstName' + 'LastName',
    rentalType:''
}

function infoFunction() {
   document.getElementById("name").innerHTML = Cars.name;

   document.getElementById("economyAvail").innerHTML = Cars.economyAvail();

   document.getElementById("price").innerHTML = "$" + Cars.econPrice;
   
   document.getElementById("midsizeAvail").innerHTML = Cars.midsizeAvail();
	            
   document.getElementById("price2").innerHTML = "$" + Cars.midsizePrice;
    
}

function renter() {
    document.getElementById("renter").innerHTML = renter.name;    
}
	            
	 
