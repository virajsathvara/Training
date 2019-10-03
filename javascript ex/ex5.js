/* Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ compute​ ​ the​ ​ union​ ​ of​ ​ two​ ​ arrays,​ ​ and​ ​ Write​ ​ a ​ ​ JavaScript
function​ ​ to​ ​ find​ ​ the​ ​ difference​ ​ of​ ​ two​ ​ arrays. */

let arr1 = [2,34,12,52,2,12,31,124,1];
let arr2 = [231,1231,4,12,56,67655,34,34,123,3235,634]

let findUnion = (arr1, arr2) => {
    let arr3 = arr2;
    let diff;
    for(let a=0; a<arr1.length; a++){
        let match = false;
        arr3.push(arr1[a]);
        for(let b=0; b<arr2.length; b++){
            if(arr1[a] === arr2[b]){
                arr3.splice(b,1);
            }
        }
    }
    arr3 = arr1.concat(arr3);
    console.log(arr3);
};
