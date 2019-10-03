/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ first​ ​ and​ ​ last​ ​ element​ ​ of​ ​ an​ ​ array.​ ​ Passing​ ​ a
parameter​ ​ 'n'​ ​ will​ ​ return​ ​ the​ ​ first​ ​ 'n'​ ​ elements​ ​ of​ ​ the​ ​ array​ ​ and​ ​ last​ ​ ‘n’​ ​ elements​ ​ of​ ​ the
array. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [1,2,34,342,23,565,72,3,7,23,346,23,42,72,3,42,6,23,54,2,342,3,6,623,3];
console.log('Enter no of first and last elements returned from the array.')
rl.question(`Number has to be a postive value which is less than ${arr.length}: `, (answer) => {
  // TODO: Log the answer in a database
  checkLength(answer);

  rl.close();
});

const checkLength = (n) => {
    if(n <= 0){
        console.log('Enter a higher number.');
    }else if( n > arr.length || typeof n != 'number'){
       console.log('Invalid Number.'); 
    }else{
        returnOutput(n);
    }
};
const returnOutput = (n) => {
    let firsArr = arr.slice(0,n);
    let lastArr = arr.slice(arr.length-n, arr.length);

    console.log(firsArr);
    console.log(lastArr);
}