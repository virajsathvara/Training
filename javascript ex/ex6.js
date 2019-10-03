/* 6. Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ fill​ ​ an​ ​ array​ ​ with​ ​ values​ ​ (numeric,​ ​ string​ ​ with​ ​ one
character)​ ​ on​ ​ supplied​ ​ bounds.
console.log(num_string_range('a',​ ​ "z",​ ​ 2));
["a",​ ​ "c",​ ​ "e",​ ​ "g",​ ​ "i",​ ​ "k",​ ​ "m",​ ​ "o",​ ​ "q",​ ​ "s",​ ​ "u",​ ​ "w",​ ​ "y"] */

let arr=[];
function num_string_range(strt_char, end_char, omt){
    for(let a = strt_char.charCodeAt(); a < end_char.charCodeAt()+2; a++){
        if(a % omt === 0){
            let ele = String.fromCharCode(a-1);
            arr.push(ele);
        }
    }
    return arr;
}

console.log(num_string_range('a','z',2));