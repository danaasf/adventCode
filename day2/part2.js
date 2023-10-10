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
        if(arr[1]==='X'){ //lose
            res+=3;
        } else if(arr[1]==='Y'){ //draw
            res+=4;
        }else { //win
            res+=8;
        }
    }else if(arr[0]==='B'){ //paper
        if(arr[1]==='X'){ //lose
            res+=1;
        } else if(arr[1]==='Y'){ //draw
            res+=5;
        }else { //win
            res+=9;
        }
    }else{ //scissors 
        if(arr[1]==='X'){ //lose
            res+=2;
        } else if(arr[1]==='Y'){ //draw
            res+=6;
        }else { //win
            res+=7;
        }
    }
    //console.log(res);
  });
  
  
  rl.on('close', () => {
    console.log("res is "+ res);
  });
  
  