// Genrate random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() *16)]
    }
    return color;
  };
  let intervalId
  const startColorChanging = function(){
     intervalId = setInterval(changeColor, 1000)
    function changeColor(){
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopColorChanging = function(){
    clearInterval(intervalId)
  }
  
  document.querySelector("#start").addEventListener('click', startColorChanging)
  
  document.querySelector("#stop").addEventListener('click', stopColorChanging)
  
  console.log(randomColor())



//   // Function to generate a random color
// const randomColor = function(){
//     const hex = "0123456789ABCDEF";
//     let color = '#';
//     // Generate a random hex color code by iterating 6 times
//     for(let i = 0; i < 6; i++){
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

// // Variable to store the interval ID for color-changing
// let intervalId;

// // Function to start the color-changing process
// const startColorChanging = function(){
//     // Set up an interval to call the changeColor function every 1000 milliseconds (1 second)
//     intervalId = setInterval(changeColor, 1000);

//     // Function to change the document body's background color
//     function changeColor(){
//         document.body.style.backgroundColor = randomColor();
//     }
// };

// // Function to stop the color-changing process
// const stopColorChanging = function(){
//     // Clear the interval using the stored interval ID
//     clearInterval(intervalId);
// };

// // Event listener for the "Start" button, calling the startColorChanging function
// document.querySelector("#start").addEventListener('click', startColorChanging);

// // Event listener for the "Stop" button, calling the stopColorChanging function
// document.querySelector("#stop").addEventListener('click', stopColorChanging);

// // Log a single random color to the console when the script is executed
// console.log(randomColor());
