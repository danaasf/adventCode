const fs = require('fs');
const readline = require('readline');
const filePath = 'C:/Users/danaa/adventCode/day1/input.txt'; 

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity, 
});

let sum = [];
let elf_sum=0,max=0; 

rl.on('line', (line) => {
  if(line.length===0){
    sum.push(parseInt(elf_sum));
    max=Math.max(...sum);
    elf_sum=0;
  }
  else {
    elf_sum+= parseInt(line);
  }
});


rl.on('close', () => {
  console.log("max is"+ max);
});

