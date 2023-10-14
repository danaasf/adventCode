const fs = require('fs');
const readline = require('readline');
const filePath = 'C:/Users/danaa/adventCode/day6/input.txt'; 

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity, 
});
res=0;
rl.on('line', (line) => {
    let i=0;
    while(i<line.length){
        let str= line.substring(i,i+4);
        if(str[0]!=str[1] && str[0]!=str[2] && str[0]!=str[3] && str[1]!=str[2] && str[1]!=str[3] && str[2]!=str[3]){
            res= i+4;
            break;
        } else {
            i++;
        }
    }
})
rl.on('close', () => {
    console.log(res);
  });
  
  