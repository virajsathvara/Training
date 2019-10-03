/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ print​ ​ array​ ​ of​ ​ object​ ​ in​ ​ ascending​ ​ order​ ​ on​ ​ age,
descending​ ​ order​ ​ on​ ​ name.​ ​ (Make​ ​ array​ ​ of​ ​ object​ ​ with​ ​ three​ ​ fields​ ​ are​ ​ 1.​ ​ Id,​ ​ 2.​ ​ Name,​ ​ 3.
age)​ ​ NOTE:​ ​ Array​ ​ have​ ​ minimum​ ​ 10​ ​ objects. */


let nameArr = ['Monica','Chandler','Joey','Ross','Rachel','Phoebe','Gunther','Richard','Ben','Emma'];
let ageArr = [30,32,32,32,28,31,32,60,5,1];
let objArr=[];
for(let a=0; a<nameArr.length; a++){
    let obj = new Object();
    obj.Id = Math.round(Math.random() * 1000);
    obj.Name = nameArr[a];
    obj.age = ageArr[a];

    objArr.push(obj);
}
let idCompare = (a,b) => {
    let compare;
    if (a.Id > b.Id){
        return 1;
    }
    else{
        return -1;
    }
    return compare;
}
console.log(objArr.sort(idCompare));
