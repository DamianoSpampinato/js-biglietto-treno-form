const summitButton = document.querySelector('#summit');
summitButton.addEventListener('click', function(){
    const travelLength = document.querySelector('#travel-length').value;
    const userAge = document.querySelector('#age').value;
    
    console.log(travelLength)
    console.log(userAge)
})

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', function(){
    const travelLength = document.querySelector('#travel-length').value = '';
    const userAge = document.querySelector('#age').value = '';
})