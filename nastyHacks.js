const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var first = true; //using a flag to read the number of cases.

rl.on('line', (line) => {
    if (first) {
        cases = +line;
        first = false; //setting flag to false after reading the first line. 
        return;
    }

    if (!cases || !cases--) return; //to count the number of cases that we read
    // return after reading all the inputs.

    var [r, e, c] = line.split(' ').map(Number); // split the input and store in an array

    if (r > e - c) {
        console.log("do not advertise");
    } else if (r < e - c) {
        console.log("advertise");
    } else {
        console.log("does not matter");
    }
}); 