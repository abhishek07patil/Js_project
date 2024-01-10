// const buttons = document.querySelectorAll('.button');
// console.log(buttons);

// const body = document.querySelector('body');

// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click', function(e){
//         console.log(e);
//         console.log(e.target);

//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'lightgreen'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id;
//         }

//     })
// })


// or


// Select all elements with the class 'button' and store them in the 'buttons' NodeList.
const buttons = document.querySelectorAll('.button');
// Log the NodeList of buttons to the console.
console.log(buttons);

// Select the <body> element of the page and store it in the variable 'body'.
const body = document.querySelector('body');

// Iterate over each button in the 'buttons' NodeList.
buttons.forEach(function(button){
    // Log the current button element being iterated over to the console.
    console.log(button);

    // Add a click event listener to the current button.
    button.addEventListener('click', function(e){
        // When the button is clicked, log the event object to the console.
        console.log(e);
        // Also log the target of the event (the button that was clicked) to the console.
        console.log(e.target);

        // Check if the clicked button's id is 'grey'.
        if(e.target.id === 'grey'){
            // If so, change the background color of the body to grey.
            body.style.backgroundColor = e.target.id;
        }
        // Check if the clicked button's id is 'lightgreen'.
        if(e.target.id === 'lightgreen'){
            // If so, change the background color of the body to light green.
            body.style.backgroundColor = e.target.id;
        }
        // Check if the clicked button's id is 'blue'.
        if(e.target.id === 'blue'){
            // If so, change the background color of the body to blue.
            body.style.backgroundColor = e.target.id;
        }
        // Check if the clicked button's id is 'yellow'.
        if(e.target.id === 'yellow'){
            // If so, change the background color of the body to yellow.
            body.style.backgroundColor = e.target.id;
        }

    })
})
