/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ chop​ ​ a ​ ​ string​ ​ into​ ​ chunks​ ​ of​ ​ a ​ ​ given​ ​ length.
console.log(string_chop('RapidOpsSolution’',2));
["Ra",​ ​ "pi",​ ​ "dO",​ ​ "ps",​ ​ "So",​ ​ ”lu”,​ ​ “ti”,​ ​ “on”] */

let string_chop = (str, size) => {
    let arr= [];
    for(let a=0; a < str.length; ){
        let prt = str.slice(a,a+size);
        arr.push(prt);
        a += size;
    }
    return arr;
}

console.log(string_chop('RapidOpsInc',5));