/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ difference​ ​ between​ ​ two​ ​ dates,​ ​ from​ ​ maximum​ ​ unit​ ​ to
minimum​ ​ unit */

let date_diff = (d1, d2) => {
    let strtDt = d1;
    let endDt = d2;
    if(d1 > d2){
        strtDt = d2;
        endDt = d1;
    }
    let years = endDt.getFullYear() - strtDt.getFullYear();
    let months = endDt.getMonth() - strtDt.getMonth();
    let days = endDt.getDate() - strtDt.getDate(); 
    return `it's been ${years} years, ${months} months and ${days} days`;
}

console.log(date_diff(new Date('9/30/1995'), new Date('9/30/2019')));