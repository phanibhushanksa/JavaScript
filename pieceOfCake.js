const readline = require('readline'); //The Readline module provides a way of reading a datastream, one line at a time.

// for reading the input we will first create an interface for the input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
// createInterface() method takes two arguments. The first argument will be for the standard input and the second one will be for reading the standard output. 

// rl.on() method takes the first argument as line event. This event is invoked whenever the user presses Enter key

rl.on('line', (input) => {
    var nums = input.split(' '); //splitting the input and storing in an array
    var side = parseInt(nums[0]); //side is the first element in the input, 
    // parseInt to convert the input to Integer type.
    var h = parseInt(nums[1]);//h is second element in the input
    var v = parseInt(nums[2]);// v is the third element in the input. 
    var thickness = 4;
    h = side-h>h? side-h:h; //ternary operator to check the bigger cut.
    v = side-v>v? side-v:v;
    console.log(thickness*h*v); //console.log to print the output. 
});