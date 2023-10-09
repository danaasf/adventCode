const fs = require('fs');
const readline = require('readline');
const filePath = 'C:/Users/danaa/adventCode/day1/input.txt'; 

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity, 
});

let sum = [];
let elf_sum=0,max=0;max1=0,max2=0,max3=0; 

rl.on('line', (line) => {
  if(line.length===0){
    sum.push(parseInt(elf_sum));
    max1=Math.max(...sum);
    let index1= sum.indexOf(max1);
    sum[index1]=0;
    max2=Math.max(...sum);
    let index2= sum.indexOf(max2);
    sum[index2]=0;
    max3=Math.max(...sum);
    sum[index1]=max1;
    sum[index2]=max2
    elf_sum=0;
    max=max1+max2+max3;
  }
  else {
    elf_sum+= parseInt(line);
  }
});


rl.on('close', () => {
  console.log("max is"+ max);
});

