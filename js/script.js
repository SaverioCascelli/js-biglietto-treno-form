const pricePerKm = .21;
const underAgePrice = .2;
const over65Price = .4;
let ageDiscount = 0;
let ticketCategory ="Biglietto Standard";
let totalPrice;
let ticketPrice = "";



const btnForm = document.getElementById("btn-form");
btnForm.addEventListener("click" , function(){
    const name = document.getElementById("input-name").value;
    const tripLenght = parseInt(document.getElementById("input-km").value);
    const ageCategory = document.getElementById("age").value;
    
    

    if(ageCategory === "underAge"){
     ageDiscount = underAgePrice;
     ticketCategory = "Biglietto minori";
    }
    else if(ageCategory === "over65") {
        ageDiscount = over65Price;
        ticketCategory = "Biglietto over 65"
        
    }

    totalPrice = tripLenght * pricePerKm ;
    totalPrice -= (totalPrice * ageDiscount);
    ticketPrice = totalPrice.toFixed(2)+"€";
    
    document.querySelector("#passengerName").innerHTML = name;
    document.querySelector("#ticketPrice").innerHTML = ticketPrice;
    document.querySelector("#ticketDiscount").innerHTML = ticketCategory;

    document.getElementById("ticket-price").classList.remove("d-none");
});



