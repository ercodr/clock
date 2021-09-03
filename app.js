let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// Set Interval is to create a timer
setInterval( () => {

    // Convert to 12 hour time format
    hr.innerText = (new Date().getHours() % 12) || 12; 

    min.innerText = new Date().getMinutes();

    sec.innerText = new Date().getSeconds();

}, 1000);


// let time = new Date().getHours();
// let greet = document.querySelector('.greet');

// setInterval( () => {

//     if(time < 12){

//         greet.innerHTML = 'Good Morning';

//     } else if(time < 17){

//         greet.innerHTML = 'Good Afternoon';

//     } else{

//         greet.innerHTML = 'Good Evening';

//     }

// }, 1000)