const fs = require('fs');
const readline = require('readline');
const filePath = 'C:/Users/danaa/adventCode/day3/input.txt'; 

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity, 
});


let res=0;
let array=[]
rl.on('line', (line) => {
    let x;
    if (line.length % 2 == 0) {
        x = (line.length / 2);
    } else {
        x = (line.length / 2) - 1;
    }
    const half1 = line.substring(0, x);
    const half2= line.substring(x,line.length);
    //console.log(line," ", half1, " ",half2);
    for (let i =0; i<x; i++){
        for(let j=0; j<x; j++){
            if(half1.charCodeAt(i)===half2.charCodeAt(j) && !(array.includes(half1[i]))){
                array.push(half1[i]);
                //console.log(half1[i]);
                if(half1.charCodeAt(i)>=97 && half1.charCodeAt(i)<=122) {
                    res+= half1.charCodeAt(i)-96;
                } else if (half1.charCodeAt(i)>=65 && half1.charCodeAt(i)<=90){
                    res+= half1.charCodeAt(i)-38;
                }
            }
        }
    }
    array=[];
  });
  
  
  rl.on('close', () => {
    console.log("res is "+ res);
  });
  
  