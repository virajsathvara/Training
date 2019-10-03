/* Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ which​ ​ accepts​ ​ a ​ ​ number​ ​ as​ ​ input​ ​ and​ ​ insert​ ​ dashes​ ​ (-)
between​ ​ each​ ​ two​ ​ even​ ​ numbers. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Enter a number: `, (answer) => {
  addDashes(answer)
  rl.close();
});

let addDashes = (num) =>{
    let newNum = '';
    if(Number.isNaN(parseInt(num))){
        console.log('Invalid input.');
    }else{
        for(let a=0; a<num.length; a++){
            if(parseInt(num[a])%2 == 0 && parseInt(num[a+1])%2 == 0){
                newNum += num[a]+'-';
            } else{
                newNum += num[a];
            }
        }
        console.log('newNum is: ',newNum);
    }
};