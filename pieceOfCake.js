const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var side = parseInt(nums[0]);
    var h = parseInt(nums[1]);
    var v = parseInt(nums[2]);
    var thickness = 4;
    h = side-h>h? side-h:h;
    v = side-v>v? side-v:v;
    console.log(thickness*h*v);
});