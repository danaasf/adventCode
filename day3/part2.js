const fs = require('fs');
const readline = require('readline');
const filePath = 'C:/Users/danaa/adventCode/day3/input.txt'; 

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity, 
});


let res=0,counter=0;
let array=[], three_elf=[],array2=[]
rl.on('line', (line) => {
    counter++;
    three_elf.push(line);
    if (counter===3){
        //console.log(three_elf);
        for (let i =0; i<three_elf[0].length; i++){
            for(let j=0; j<three_elf[1].length; j++){
                if(three_elf[0].charCodeAt(i)===three_elf[1].charCodeAt(j) && !(array.includes(three_elf[0][i]))){
                    array.push(three_elf[0][i]);
                }
            }
        }
        for(let i=0; i<three_elf[2].length; i++){
            if(array.includes(three_elf[2][i]) && !(array2.includes(three_elf[2][i]))){
                array2.push(three_elf[2][i]);
                if(three_elf[2].charCodeAt(i)>=97 && three_elf[2].charCodeAt(i)<=122) {
                    res+= three_elf[2].charCodeAt(i)-96;
                } else if (three_elf[2].charCodeAt(i)>=65 && three_elf[2].charCodeAt(i)<=90){
                    res+= three_elf[2].charCodeAt(i)-38;
                }
            }
        }
        //console.log(array2);

        three_elf=[]
        array=[]
        array2=[]
        counter=0;
    }
  });
  


  rl.on('close', () => {
    console.log("res is "+ res);
  });
  
  