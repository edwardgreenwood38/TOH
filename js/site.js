

// get values from the page
// starts or controller function
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // we need to validate our input
    // convert to int
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // check if int
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call genrateNumbers
        let numbers = generateNumbers(startValue, endValue);

        // call displayNumbers
        displayNumbers(numbers);
    } 
    else {
        alert("You must enter integers");
    }
}


// generate from start value to end value
// logic function(s)
function generateNumbers(sValue, eValue) {

    let numbers = [];

    // we wnat to get all numbers from start to end
    for (let i = sValue; i <= eValue; i++) {
        numbers.push(i); 
    }

    return numbers;
}


// dsiplay the nubmers and mark even number bold
// display or view fucntions
function displayNumbers(n) {
    // to hold html
    let templateRows = "";

    for (let i = 0; i < n.length; i++) {
        let number = n[i];

        //check if even
        if (number % 2 == 0)
        {
            templateRows += `<tr><td><b>${number}</b></td></tr>`;
        }
        else
        {
            templateRows += `<tr><td>${number}</td></tr>`;
        }
        
    }

    document.getElementById("results").innerHTML = templateRows;
}