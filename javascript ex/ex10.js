/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ time​ ​ differences​ ​ in​ ​ years,​ ​ months,​ ​ weeks,​ ​ days,​ ​ hours
and​ ​ minutes​ ​ between​ ​ two​ ​ dates. */

let date_diff = (d1, d2) => {
    let strtDt = d1;
    let endDt = d2;
    if(d1 > d2){
        strtDt = d2;
        endDt = d1;
    }
    let years = endDt.getFullYear() - strtDt.getFullYear();
    let months = years * 12 + (endDt.getMonth() - strtDt.getMonth());
    let weeks = Math.floor(years * 52.1429);
    let days = weeks * 7;
    let hours = days * 24;

    return `it's been ${years} in years, ${months} in months, ${weeks} in weeks, ${days} in days, ${hours} in hours and ${hours * 60} in minutes between the two dates`;
}

console.log(date_diff(new Date('9/30/1995'), new Date('9/30/2019')));