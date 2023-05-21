<<<<<<< HEAD
 /***************************************json iteration********************************/

var person={
    name:"aravindh",
    gender:"male",
   
}
let personjson=JSON.stringify(person);
console.log(typeof personjson);

let personobj=JSON.parse(personjson);
console.log(typeof personobj);

let personarray=Object.entries(person);
console.log(personarray)

for (var iterator of personarray) {                                               //for of loop
   console.log(iterator);
    
}
for (let key in person) {                                                         //for in loop
    console.log(`key is ${key} value is ${person[key]}`);
   
}                                                                                 //for loop
for(let i=0;i<personarray.length;i++){
   console.log(personarray[i]);
    
}
                                                                                 //for each
personarray.forEach(element => {
    console.log(element);
});
=======
 /***************************************json iteration********************************/

var person={
    name:"aravindh",
    gender:"male",
   
}
let personjson=JSON.stringify(person);
console.log(typeof personjson);

let personobj=JSON.parse(personjson);
console.log(typeof personobj);

let personarray=Object.entries(person);
console.log(personarray)

for (var iterator of personarray) {                                               //for of loop
   console.log(iterator);
    
}
for (let key in person) {                                                         //for in loop
    console.log(`key is ${key} value is ${person[key]}`);
   
}                                                                                 //for loop
for(let i=0;i<personarray.length;i++){
   console.log(personarray[i]);
    
}
                                                                                 //for each
personarray.forEach(element => {
    console.log(element);
});
>>>>>>> 2448b4bb1f1db910687bbd658547e2ca0daae9f7
