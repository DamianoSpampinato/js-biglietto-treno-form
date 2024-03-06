// varbiabili tasso di sconto  e definizione costo per km
const defaultPricePerKm = 0.21;
console.log(defaultPricePerKm);
const minorDiscount = 20;
const over65Discount = 40;


//button functin
const summitButton = document.querySelector('#summit');
summitButton.addEventListener('click', function(){
    const travelLength = parseFloat(document.querySelector('#travel-length').value);
    const userAge = parseFloat(document.querySelector('#age').value);
    let travelPrice = travelLength * defaultPricePerKm;
    if (userAge < 18) { travelPrice = (travelLength * defaultPricePerKm) - (travelLength * defaultPricePerKm * 20 / 100)};
    if (userAge > 65) { travelPrice = (travelLength * defaultPricePerKm) - (travelLength * defaultPricePerKm * 40 / 100)};
    console.log(travelLength);
    console.log(userAge);
    console.log(travelPrice.toFixed(2));
    //output-utente
    document.querySelector('.travel-output').innerHTML = (travelPrice.toFixed(2));
   

})

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', function(){
    const travelLength = document.querySelector('#travel-length').value = '';
    const userAge = document.querySelector('#age').value = '';
    const travelPrice = document.querySelector('.travel-output').innerHTML = ('0');
})
