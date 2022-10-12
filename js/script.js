
const btnForm = document.getElementById("btn-form");
btnForm.addEventListener("click" , function(){
    const name = document.getElementById("input-name").value;
    const tripLenght = parseInt(document.getElementById("input-km").value);
    const ageCategory = document.getElementById("age").value;

    
    
});

// const passengerAge = parseInt(prompt("Età passeggero:"));
// const tripLenght = parseInt(prompt("Lunghezza viaggio in Km:"));

// const pricePerKm = .21;
// const underAge = 18;
// const overAge = 65;
// const under18Price = .2;
// const over65Price = .4;
// let ageDiscount = 0;
// let totalPrice;
// let ticketPrice = "";


// if(passengerAge < underAge) ageDiscount = under18Price;
// else if( passengerAge > overAge) ageDiscount = over65Price;

// totalPrice = tripLenght * pricePerKm ;

// totalPrice -= (totalPrice * ageDiscount);

// ticketPrice = totalPrice.toFixed(2);