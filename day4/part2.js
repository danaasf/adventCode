
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
    arr.sort();
   // console.log(arr);

   let x1= arr[0][0], x2=arr[0][1], y1=arr[1][0],y2=arr[1][1]
   if (Math.max(x1,y1)<= Math.min(x2,y2))
    res++;
    
    //3 7 1 5
    // if( (x1>=y1 && x1<=y2) || (x2>=y1 && x2<=y2) || (y1>=x1 && y1<=x2) || (y2>=x1 && y2<=x2) ){
    //     res++;
    //         //console.log("yes");
    // } 
          
  });
  
  
  rl.on('close', () => {
    console.log("res is "+ res);
  });
  
  