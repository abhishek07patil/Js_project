// Get the HTML element with the ID 'clock' and store it in the variable 'clock'.
const clock = document.getElementById('clock')

// Set up an interval that executes the enclosed function every 1000 milliseconds (1 second).
setInterval(function(){  
    // Create a new Date object representing the current date and time.
    let date = new Date();

    // Set the innerHTML of the 'clock' element to the current time.
    // toLocaleTimeString() converts the date object to a time string based on the local time format.
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)  // 1000 milliseconds = 1 second






// const clock = document.getElementById('clock')
// // or
// // const clock = document.querySelector('#clock')

// // let date = new Date();
// // console.log(date.toLocaleTimeString());

// setInterval(function(){             
//     let date = new Date();
//     // console.log(date.toLocaleTimeString());
//     clock.innerHTML = date.toLocaleTimeString();
// },1000)



