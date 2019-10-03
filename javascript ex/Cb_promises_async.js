"user strict";
//addAll();
function addStr(prev, current, callback){
    setTimeout(() => {
        callback((prev+' '+current));
    },
    Math.floor(Math.random() * 100) + 1
    )
}

function addAll(){
    addStr('','A',result => {
        addStr(result,"B", result => {
            addStr(result,'C',result => {
                console.log(result);
            })
        })
    })
}

//addAllPromise();
function addStrPromise(prev, curr){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(prev+' '+curr);
        }, Math.floor(Math.random() * 100) + 1)
    })
}

function addAllPromise(){
    addStrPromise('', 'A')
    .then(result => addStrPromise(result, 'B'))
    .then(result => addStrPromise(result, 'C'))
    .then(result => console.log(result))
}

//addStrAsync();
async function addStrAsync(){
    let toPrint = await addStrPromise('','A');
    toPrint = await addStrPromise(toPrint, 'B');
    toPrint = await addStrPromise(toPrint, 'C');
    console.log(toPrint);
}

//Destructing
function destruct(){
    let arr = [1,2,3,4,5,5,6,23534,2,423,412,3,123,12,31,24124,2];
    let [a,b,...c] = arr;
    console.log(a);
    console.log(b);
    console.log(c);
}



function testDeclarations(){
    var tstVar = 'Testing var overhere';
    let tstLet = 'Testing let overhere';

    console.log(tstVar);

    for(var i = 0; i < 1; i++){
        var tstVar2 = 'testing var in function';
        console.log(tstVar);
    }
    console.log(tstVar2);
    console.log(i);

    let print2 = () =>{
        var tstVar = 'testing var in function';
        console.log(tstVar);
    }
    print2();
    console.log(tstVar);
}

//testDeclarations();

const second = () => {
    console.log('Hello from Second!');
  }
  const first = () => {
    console.log('Hi from First!');
    second();
    console.log('The End');
  }
  first();

  const networkRequest = () => {
    setTimeout(() => {
      console.log('In timeout. Async Code');
    }, 0);
  };
  console.log('First log. Executing timeout');
  networkRequest();
  console.log('The End');

var map = new Map();
map.set("Potato", 12);
map.set("Tomato", 34);

var arr = [23,2342,234234,1245,5,75,8,564];
for(let item of arr) {
   console.log(item)
}

for(let item in arr) {
   console.log(item)
}


