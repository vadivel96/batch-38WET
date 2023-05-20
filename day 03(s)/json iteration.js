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
