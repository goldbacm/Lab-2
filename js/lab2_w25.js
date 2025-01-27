///https://jsfiddle.net/ for playground


// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user

////////////////////////////////////////////////////////////////////////
var sentence = "How many vowels do you think are in this one?";
//establish a variable that will be the same throughout, a constant
const cVowels = (str) => {
    const vowels = "aeiouAEIOU"; //these are our vowels!
    let count = 0; //this 
    //establish a for loop to iterate through each character to see if it is one of our constants
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    //gives us the number of vowels
    return count;
};

const str = sentence;
console.log(cVowels(str)); //this outputs a message for us
//when run on jsfiddle the count came to 14
/////////////////////////////////////////////////////////////////////
//////////////////version with the user prompt//////////////////////
////////////////////////////////////////////////////////////////////
let userInput = prompt("I need some words:");

console.log("You put:", userInput);
const cVowels2 = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

const string1 = userInput;
console.log(cVowels2(string1));
//////////////////////////////////////////////////////////////////////////////
//some code help from geeks for geeks
//////////////////////////////////////////////////////////////////////////////

// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each. 
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

const first = [5, 7];
const second = [12, 3];
const third = [7, 7];
// Your solution goes here

//we have array need to determine even or odd number 
//function that checks if number in array are even
//if even add
//if not even then multiply

function checkifallodd(arr) {
    for (let num of arr){
        if (num % 2 === 0) {
            return arr.reduce((a,b) => a + b);
        }
    }
    return arr.reduce((a,b) => a * b);
}
+
console.log(checkifallodd(first))
console.log(checkifallodd(second))
console.log(checkifallodd(third))
//////////////////////////////////////////////////////////////
//utilized stackexchange and geeks for geeks for reference////
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

// Question 3 - Twenty One
// You'll receive three arrays with two numbers again.
// If the two numbers add up to 21, return True
// If they don't, return False unless they are identical
// If they are identical, return "Split"

const p = [19, 2];
const q = [4, 6];
const r = [16 ,16];
// Your solution goes here

function twentyone(arr){
    if (arr.reduce((a,b) => a == b)) {
        return "Split";
    }
    else if (arr.reduce((a,b) => a +b)== 21){
        return true;
    }
    else {
        return false;
    }
 
}
console.log(twentyone(p))
console.log(twentyone(q))
console.log(twentyone(r))

//results when run onjsfiddle were true, false, and split
//used model of previous prompt and help from Alec!

///////////////////////////////////////////////////////////////////////////////

// Question 4 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

// Your solution goes here

// this itertes through each number from 1 to 100
for (var i=1; i <= 100; i++) {
    //usse if statement to find any number that are divisible by both 3 and 5
    //had this later in code and it did not work as it sorted first to the others
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0) {  // else if statement to find all those that are only divisible by 3
        console.log("Fizz")
     }
    else if (i % 5 == 0) {  // identify only those number that are divizible by 5
        console.log("Buzz")
     }
    else {                   // this statement catches the rest of the numbers and reports them without a name
        console.log(i)
     }
}


//Question 5 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar
// Call the start method

//Your solution goes here
var car = {} // this is establishing an empty dictionary (at least in python...) for the variable car
car.make = "toyota" //these are descriptors of my beautiful...slightly old...car
car.model = "4runner"
car.year = 2000 //noting this as an integer and not a string! 
car.color = "sand"
car.start=function(){
    console.log("vroom vroom! the car has started...we were not sure for a second there!") //ps it doesn't always start, but it tries
}
car.start() //test to see if it starts!
console.log(car.model) // test to see if the call for these works! (it did)


//Question 6 - How many states are there?
// Ok, this seems silly, but we're actually going to work with AJAX to get some data and process it
// You need to load a geojson file, convert it to json, and then count up the number of entires it has...
// In other words, print out to the console log the number of airports in the data set
// You'll want to use chapter 3 of the roth textbook and our Monday lecture here.
// +2 bonus points if you tell me first how many total airports there are and then how many civilian 
// feel free to explore the data in QGIS (or arc). If you know how to answer the question in QGIS, how do you transfer it to javascript?

//defing a function using asychronous javascript and XML
//requesting data from server w/o reloading page...ie go grap data and covert it to json!
//then we will do some counting
function jsAjax() {
    // Step 1: Create/define the data request
    var request = new Request('data/airports.geojson'); // created a geojason file of the airports, created a git repository called lab 2 and uploaded it, calling the file here
    // Step 2: Define Fetch parameters
    var init = {
        method: 'GET'
    }
    fetch(request, init) // Step 3: Use Fetch to retrieve the data and set up callback functions
    .then(response => {
        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // if there are no errors return as Converted JSON, returns a promise
    })
    .then(callback) // Pass the parsed JSON data back to the callback function
    .catch(error => {
        console.error('There was an error with the fetch operation:', error); //this step is to catch any other errors
    });
    
}
// Step 4: Define your callback function to process the data
function callback(data) {
    // Log the data to inspect its structure (useful for debugging), checking to see that the json contains what we want
    console.log(data);

    let totalAirports = 0; //keep track of the total number of airports, declaring variable totalAirports to count how many we have
    let nonMilitaryAirports = 0; // Track airports that are not military, trying to count how many civilian airports there are

    // Loop through each feature (airport) in the GeoJSON data
    data.features.forEach(airport => {
        totalAirports++; // For each airport, increment the `totalAirports` by 1. This keeps track of how many airports in file
        // Check if the airport is not military (adjust 'type' if necessary)
        if (airport.properties.type && 
            airport.properties.type.toLowerCase() !== 'military' && 
            airport.properties.type.toLowerCase() !== 'major and military' &&
            airport.properties.type.toLowerCase() !== 'mid and military' &&
            airport.properties.type.toLowerCase() !== 'military mid' && 
            airport.properties.type.toLowerCase() !== 'military major' && 
            airport.properties.type.toLowerCase() !== 'spaceport')  { //accessing the type of airpot listed after properties
            nonMilitaryAirports++; // Count if its not military, doing it this way as civilian is not listed in nameing
        }
       
    });

    // Step 5: Send the final answer to the console
    console.log("Total Airports: " + totalAirports); //this should output Total Aiports: as a label and return our previously defined variable for all aitports 
    console.log("Non-Military Airports: " + nonMilitaryAirports); //should return the civilian airports! 
}

airport_json  = jsAjax();
callback(airport_json);

// //class example
// fetch('/data/airports.geojson')
//     .then(response =>response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.error('Error: ', error))

// Question 7 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data is not created within them, this is different from the example in Chapter 2)
// The function should take in the arrays, combine them into an HTML FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"

var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany']
var pops = ['59920', '652500', '176650', '56470']


//Create your function
function create_table(array1, array2){
    //create the table element
    var table = document.createElement("table");
    //create a header row
    var headerRow = document.createElement("tr");
    //add the row to the table
    table.appendChild(headerRow);
    //create the "City" and "Population" column headers
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	
    //loop to add a new row for each city
    for (var i = 0; i < array1.length; i++){
        var add_row_html = "<tr><td>" + array1[i] + "</td><td>" + array2[i] + "</td></tr>"; // adding open table, open entry stick in array 1, close andd open next to put in array 2, and array, 
        //closes box and opens next row to repeat process
        table.insertAdjacentHTML('beforeend', add_row_html); //inserts HTML code into table before the end of the element 
    }
    var div = document.getElementById("mydiv")
    div.appendChild(table)
  }
  create_table(cities, pops) //i summon the table into existance! It is now in an HTML formateed table...hooray sometime worked!

   //now I need to add the table to an imaginary div that shall hence forth be knwon as "mydiv"
    
var whatevs = document.getElementById("mydiv")
whatevs.appendChild(table)

// Citing sources: referenced Roth soltutions and worked with classmatesto accomplish the question, also used chatgpt
//used html file to check that this worked and it did... yeah




