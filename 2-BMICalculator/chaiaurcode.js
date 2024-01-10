// Select the first <form> element in the document and assign it to the variable 'form'.
const form = document.querySelector('form');

// Add an event listener to the form for the 'submit' event.
form.addEventListener('submit', function(e){
    // Prevent the default form submission behavior which refreshes the page.
    e.preventDefault();

    // Retrieve the user-entered height from the input field with the ID 'height',
    // parse it as an integer, and store it in the variable 'height'.
    const height = parseInt(document.querySelector('#height').value);

    // Similarly, retrieve and parse the user-entered weight from the input field
    // with the ID 'weight' and store it in the variable 'weight'.
    const weight = parseInt(document.querySelector('#weight').value);

    // Select the HTML element with the ID 'results' to display the output.
    const results = document.querySelector('#results');

    // Validate the height input: Check if height is not a number or less than or equal to 0.
    if(isNaN(height) || height <= 0){
        // Display an error message in the 'results' element and exit the function.
        results.innerHTML = 'Please enter a valid height.';
        return;
    } 
    // Similarly, validate the weight input.
    else if(isNaN(weight) || weight <= 0){
        // Display an error message in the 'results' element and exit the function.
        results.innerHTML = 'Please enter a valid weight.';
        return;
    }

    // Calculate BMI using the formula and fix it to two decimal places.
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Initialize a variable to store the BMI category.
    let bmiCategory = '';

    // Determine the BMI category based on the calculated BMI.
    if (bmi < 18.6) {
        bmiCategory = 'You are underweight.';
    } else if (bmi <= 24.9) {
        bmiCategory = 'You have a normal weight.';
    } else {
        bmiCategory = 'You are overweight.';
    }

    // Display the BMI value and category in the 'results' element.
    results.innerHTML = `<span>BMI: ${bmi}</span><br><span>${bmiCategory}</span>`;
});


// or

// const form = document.querySelector('form')

// form.addEventListener('submit', function(e){
//     // e.preventDefault     //preventDefault jo bhi apka ho 1min ruko
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = document.querySelector('#results')

//     if(height === '' || height < 0 || isNaN(height)){
//         results.innerHTML = `please give valid height ${height}`;
//     }
//     else if(weight === '' || weight < 0 || isNaN(weight)){
//         results.innerHTML = `please give valid weight ${weight}`;
//     }
//     else{
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2)
//         results.innerHTML = `<span>${bmi}</span>`

//         if (bmi<18.6) {
//             console.log("You are now Under Weight");
//         } 
//         else if(bmi<=24.9 && bmi>=18.6){
//             console.log("You are normal");
//         }
//         else{
//             console.log("You are overweight");
//         }
//     }

// })

// or

// const form = document.querySelector('form');

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     // Validation for height and weight
//     if(isNaN(height) || height <= 0){
//         results.innerHTML = 'Please enter a valid height.';
//         return;
//     } else if(isNaN(weight) || weight <= 0){
//         results.innerHTML = 'Please enter a valid weight.';
//         return;
//     }

//     // Calculate BMI
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//     // Determine BMI category
//     let bmiCategory = '';
//     if (bmi < 18.6) {
//         bmiCategory = 'You are underweight.';
//     } else if (bmi <= 24.9) {
//         bmiCategory = 'You have a normal weight.';
//     } else {
//         bmiCategory = 'You are overweight.';
//     }

//     // Display both BMI value and category
//     results.innerHTML = `<span>BMI: ${bmi}</span><br><span>${bmiCategory}</span>`;
// });

