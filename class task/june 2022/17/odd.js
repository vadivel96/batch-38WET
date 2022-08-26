var oddarray=[];
let anofun=(function(array){
    for(let ele of array){
        if(ele%2!==0)
        oddarray.push(ele);
    }
    return oddarray;
})

console.log(anofun([1,2,3,4,5,6,7,8,9,10]));