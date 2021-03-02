const { constants } = require('buffer');
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//var first = true;


rl.on('line', (line) => {
    // if (first) {
    //     cases = +line;
    //     first = false;
    //     return;
    // }
    
    // if (!cases || !cases--  ) // checking if we have reached the end of input.
    // {
    //     return;
    // }
    flag = false;
    var input = line;
    for (let index = 0; index < input.length-1; index++) {
        if(input[index]+input[index+1] == "ss")
        {
            console.log("hiss");
            flag = true;
            break;
        }
        
            
        
    }
    if (!flag) {
        console.log("no hiss");
    }
}); 
