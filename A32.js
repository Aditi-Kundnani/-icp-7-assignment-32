// Global array variable
var myArray = [];

function generateArray() {
    // Generate a random array of 10 numbers between 1 and 100
    myArray = [];
    for (var i = 0; i < 10; i++) {
        myArray.push(Math.floor(Math.random() * 100) + 1);
    }
    displayArray();
}

function sortArray() {
    // Sort the array in ascending order
    myArray.sort(function(a, b) {
        return a - b;
    });
    displayArray();
}

function filterArray() {
    // Filter the array to only contain even numbers
    myArray = myArray.filter(function(num) {
        return num % 2 === 0;
    });
    displayArray();
}

function displayArray() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Array: " + myArray.join(", ");
}
