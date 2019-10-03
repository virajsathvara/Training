/* Write​ a JavaScript​ ​ function​ ​ that​ ​ displays a​ list​ ​ of​ ​ names​ ​ according​ ​ to​ the​ hobbies​ ​ group.
[{
Id:1,
Name:​ ​ ‘abc’,
Age:​ ​ 25,
hobbies:[‘reading’,’travelling’,’music’]
},{
Id:2,
Name:​ ​ ‘xyz’,
Age:​ ​ 23,
hobbies:[‘reading’,drawing’,’music’]
}]
NOTE​ : ​ ​ array​ ​ can have​ ​ minimum​ ​ 5 ​ ​ objects,​ ​ and​ ​ every ​ object​ ​ has ​ minimum​ ​ 1 ​ ​ hobby.
Expected​ ​ output​ :
Reading:​ ​ [‘abc’,​ ​ ‘xyz’],
Travelling:​ ​ [‘abc’],
Music:​ ​ [‘abc’,​ ​ ‘xyz’],
Drawing:​ ​ [‘xyz] */


let hobbiesArr = ['reading','drawing','music','travelling','surfing','swimming','workingout','movies','cooking','hiking'];
let nameArr = ['Luke','Lorelai','Rory','richard','Emily','Chris','Lane','Kirk','Suki','Jackson'];
let people = [];
for(let a=0; a< 10; a++){
    let obj = new Object();
    obj.Id = Math.floor(Math.random() * 100);
    obj.Name = nameArr[a];
    obj.Age = Math.floor(Math.random() * 60);
    if(a+2 >= 10){
        obj.Hobbies = [hobbiesArr[a], hobbiesArr[a-1], hobbiesArr[a-2]];
    }else{
        obj.Hobbies = [hobbiesArr[a], hobbiesArr[a+1], hobbiesArr[a+2]];
    }
    
    people.push(obj);
}
console.log(people);


let getHobbies = () => {
    let myMap = new Map();
    for(let a = 0; a < people.length; a++){
        for(let b = 0; b < people[a].Hobbies.length; b++){
            if(myMap.has(people[a].Hobbies[b])){
                let newArr = myMap.get(people[a].Hobbies[b]);
                newArr.push(people[a].Name);
                myMap.set(people[a].Hobbies[b], newArr);
            }else{
                myMap.set(people[a].Hobbies[b],[people[a].Name]);
            }
        
        }
    }

    console.log(myMap);
}

getHobbies();