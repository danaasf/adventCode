const fs = require('fs');
const readline = require('readline');
const filePath = 'C:/Users/danaa/adventCode/day5/input.txt'; 

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity, 
});

let array_of_stacks=[]
let size=0;
rl.on('line', (line) => {
    //this is something both stupid and smart that I did to get rid of the square brackets and spaces
    line=(line.replaceAll("    ","-"));
    let str=line.replace(/[\s\[\]]/g, '');

    if (str[0]!= 'm' && str[0]!='' && str[0]!='1'){
    for(let i=0 ; i<str.length; i++){
        if(array_of_stacks.length<(str.length)){
            //creating a new stack 
            array_of_stacks.push(new Array());
        }
        if(str[i]!='-'){
        array_of_stacks[i].push(str[i]);
        }
    }
    } else if (str[0]==='m'){
        let arr=str.split(/(\d+)/);
        //arr[1] is the number of elements to move, from arr[3], to arr[5];
        let num= arr[1], from=arr[3], to=arr[5];
        array_of_stacks[from-1].reverse();
        array_of_stacks[to-1].reverse();
        //console.log(num,from,to);
        for (let i=0; i<num;i++){
            var x=array_of_stacks[from-1].pop();
            array_of_stacks[to-1].push(x);
        } 
        array_of_stacks[from-1].reverse();
        array_of_stacks[to-1].reverse();

    } else {
        //do nothing
    }

  });

  
  rl.on('close', () => {
    console.log(array_of_stacks);
  });
  
  