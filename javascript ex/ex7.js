// Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ get​ ​ the​ ​ month​ ​ name​ ​ from​ ​ a ​ ​ particular​ ​ date.

let month = (dt) => {
    let monthArr = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return monthArr[dt.getMonth()];
    };
    console.log(month(new Date("2/26/1996")));