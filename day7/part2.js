const fs = require('fs');
const readline = require('readline'); 
const filePath = 'C:/Users/danaa/adventCode/day7/input.txt'; 
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity, 
  });


let map = new Map(); 
let path = new Array();
let current="";
rl.on('line', (line) => {
    let str= line.split(" ");
    //console.log(str);
    if(str[0]==='$' && str[1]==="cd"){
        if (str[2]===".."){
           path.pop();
        } else {
        path.push(str[2]);
        }
    } else if(str[0]==='$' && str[1]==="ls"){
        //do nothing
    } else if (str[0]==="dir"){
        //do nothing
    }
    else {
        const size = parseInt(str[0]);
        let key = '';
        for (let i = 0; i< path.length; i++) {
        key += path[i];
        if (!map.has(key)){
            map.set(key,0);
        }
        let s= map.get(key);
        s+=size;
        map.set(key,s);
      }
    }      
});
  


rl.on('close', () => {
    let min=Infinity,i=0;
    let total=map.get('/'), all=70000000;
    let iterator1 = map.values();
    while(i<map.size){
    let x=parseInt(iterator1.next().value);
    if(all-total + x >= 30000000){        
        if(x<min){
            min=x
        }
    }
    i++;
    } 
   console.log(min);
});
    
    