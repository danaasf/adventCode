const fs = require('fs');
const readline = require('readline');
const filePath = 'C:/Users/danaa/adventCode/day4/input.txt'; 

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity, 
});


let res=0;
let in_range=[], flag=0;
rl.on('line', (line) => {
    let arr= line.split(",");
    arr[0]=arr[0].split("-");
    arr[1]=arr[1].split("-");
    for(let i=0; i<2; i++){
      for(let j=0;j<2;j++){
        arr[i][j]=parseInt(arr[i][j]);
      }
    }
    if((arr[0][0]<= arr[1][0] && arr[0][1]>=arr[1][1]) ){
        res++;
            //console.log("yes");
    } else if (arr[1][0]<= arr[0][0] && arr[1][1]>=arr[0][1]) {
        res++;
            //console.log("yes");
    }else {
            //do nothing
    }
          
  });
  
  
  rl.on('close', () => {
    console.log("res is "+ res);
  });
  
  