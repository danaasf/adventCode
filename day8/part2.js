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


rl.on('close', () => {
    //console.log(trees);
    let max_score=0,score=0;
    //interior squares
    for (let i=0; i<trees.length; i++){
        for (let j=0; j<trees[0].length; j++){
            let max_up=0,max_down=0, max_left=0,max_right=0;
            const target = trees[i][j];

        // Check left
        for (let k = j - 1; k >= 0; k--) {
            if (trees[i][k] < target) {
                max_left++;
            } else {
                if(trees[i][k]=== target){
                    max_left++;
                    break;
                }
                else break;
            }
        }

        // Check right
        for (let k = j + 1; k < trees[0].length; k++) {
            if (trees[i][k] < target) {
                max_right++;
            } else {
                if(trees[i][k]=== target){
                    max_right++;
                    break;
                }
                else break;
            }
        }

        // Check up
        for (let l = i - 1; l >= 0; l--) {
            if (trees[l][j] < target) {
                max_up++;
            } else {
                if(trees[l][j]=== target){
                    max_up++;
                    break;
                } else break;
            }
        }

        // Check down
        for (let l = i + 1; l < trees.length; l++) {
            if (trees[l][j] < target) {
                max_down++;
            } else {
                if(trees[l][j]=== target){
                    max_down++;
                    break;
                }
                else break;
            }
        }
            score = max_up * max_down * max_left * max_right;
            if(score>max_score){
                max_score=score;
            }
        }
    }

    console.log(max_score);
   
  });
  
  