/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​ ​ an​ ​ integer​ ​ with​ ​ commas​ ​ as​ ​ thousands​ ​ separators. */

let addCommas = (money) => {
    let money_str = money.toString();
    let cnt = 1;
    for(let a = money_str.length-1; a > 0; a--){
        
        if(cnt %3 == 0){
            money_str = money_str.slice(0, a)+','+ money_str.slice(a, money_str.length);
        }
        cnt++;
    }
    console.log(money_str);
}

addCommas(100000000);