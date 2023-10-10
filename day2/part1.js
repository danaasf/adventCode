const fs = require('fs');
const readline = require('readline');
const filePath = 'C:/Users/danaa/adventCode/day2/input.txt'; 

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity, 
});

let res=0; 
rl.on('line', (line) => {
    const arr = line.split(" ");
    if(arr[0]==='A'){ //rock
        if(arr[1]==='X'){ //rock
            res+=4;
        } else if(arr[1]==='Y'){ //paper
            res+=8;
        }else { //scissors
            res+=3;
        }
    }else if(arr[0]==='B'){ //paper
        if(arr[1]==='X'){ //rock
            res+=1;
        } else if(arr[1]==='Y'){ //paper
            res+=5;
        }else { //scissors
            res+=9;
        }
    }else{ //scissors 
        if(arr[1]==='X'){ //rock
            res+=7;
        } else if(arr[1]==='Y'){ //paper
            res+=2;
        }else { //scissors
            res+=6;
        }
    }
    //console.log(res);
  });
  
  
  rl.on('close', () => {
    console.log("res is "+ res);
  });
  
  