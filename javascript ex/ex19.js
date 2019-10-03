/* Write​ ​ a ​ ​ JavaScript​ ​ function​ ​ to​ ​ delete​ ​ particular​ ​ object​ ​ from​ ​ array​ ​ and​ ​ add​ ​ new​ ​ object​ ​ at
particular​ ​ position. */

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

console.log(objArr);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Press 1 to delete Object and 2 to add new Object. : `, (choice) => {
  // TODO: Log the answer in a database
  obj_functon(choice);

});

let obj_functon = (choice) => {
    switch(choice){
        case '1': 
            rl.question(`Enter Id of the Object: `, (id) => {
                delete_obj(id);
            });
            break;
        case('2'):
            rl.question(`Enter name, age and index for the object: `, (data) => {
                let dataArr = data.split(",");  
                add_obj(dataArr);
            });
    }
};

let delete_obj = (ind) => {
    objArr.forEach( ob => {
        if(ob.Id == ind){
            let index = objArr.findIndex( a => a.Id == ind);
            objArr.splice(index,1);
        }
    })
    /* if(ind < 0 || ind > objArr.length){
        console.log(" Invalid Input");
    }else{
        objArr.splice(ind,1);
    } */
    console.log(objArr);
    rl.close();
}

let add_obj = (arr) => {
    let obj = new Object();
    obj.Id = Math.round(Math.random() * 1000);
    obj.Name = arr[0];
    obj.age = arr[1];
    let index = arr[2];
    
    objArr.splice(index,0,obj);
    console.log(objArr);
    rl.close();
}