// Write​ ​ a ​ ​ JavaScript​ ​ program​ ​ to​ ​ shuffle​ ​ an​ ​ array.

let arr = [2,34,12,52,2,12,31,124,1,231,231,1231,4,56,67655,34,34,123,3235,634];
console.log('Original Array: ', arr);

for(let a=0; a< arr.length; a++){
    let random = Math.floor(Math.random() * arr.length);
    arr[a] = arr[a] + arr[random];
    arr[random] = arr[a] - arr[random];
    arr[a] = arr[a] - arr[random];
}

console.log('Changed array: ', arr);