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
        let str= line.substring(i,i+14);
        let flag= false;
        for (let j=1; j<14; j++){
            if(str.substring(0,j).includes(str[j]) || str.substring(j+1,str.length).includes(str[j])){
                flag=true;
            }
        }
        if (flag){
            i++;
        } else{
            res=i+14;
            break;
        }

        
    }
})
rl.on('close', () => {
    console.log(res);
  });
  
  