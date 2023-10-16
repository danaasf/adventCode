const fs = require('fs');
const readline = require('readline');
const filePath = 'C:/Users/danaa/adventCode/day8/input.txt'; 

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity, 
});

let trees= new Array();
let row=0,res=0;
rl.on('line', (line) => {
    row++;
    trees.push(line.split("").map(Number));
});

let max_row= -Infinity, max_col=-Infinity;
rl.on('close', () => {
    //console.log(trees);
    res+= trees[0].length*2 + 2*(row-2);
    //interior squares
    for (let i=1; i<trees.length-1; i++){
        for (let j=1; j<trees[0].length-1; j++){
            let max_up=-Infinity,max_down=-Infinity, max_left=-Infinity,max_right=-Infinity;
            for(let l=0; l<j; l++){
                if(trees[i][l]>max_left){
                    max_left=trees[i][l];
                }
            }
            for(let l=j+1; l<trees[0].length; l++){
                if(trees[i][l]>max_right){
                    max_right=trees[i][l];
                }
            }
            for(let l=0; l<i; l++){
                if(trees[l][j]>max_up){
                    max_up=trees[l][j];
                }
            }
            for(let l=i+1; l<trees.length; l++){
                if(trees[l][j]>max_down){
                    max_down=trees[l][j];
                }
            }
            if(trees[i][j]>max_left ||trees[i][j]>max_right || trees[i][j]>max_up || trees[i][j]>max_down){
                res++;
            }
        }
    }

    console.log(res);
   
  });
  
  