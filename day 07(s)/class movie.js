class movie{
    constructor(movieName,studioName,pgName){
        this.movie=movieName;
        this.studio=studioName;
        this.ratings=pgName;
    }
     
     getPg(inputArray){  
        console.log(inputArray)
      inputArray.forEach(element => {
       
       {console.log(element)}
       console.log(this)
      });  
      
    }    
}


const movieobj1=new movie("casino royale","A productions","pg13");
const movieobj2=new movie("inception","B productions","pg15");
const movieobj3=new movie("zootopia","C productions","pg14");
const movieobj4=new movie("ice age-2","D productions");
const movieobj5=new movie("avengers end game","E productions","pg13");
const movieobj6=new movie("jhon wick","F productions","pg15");
console.log(movieobj3)
movieobj1.getPg([movieobj1,movieobj2,movieobj3,movieobj4,movieobj5, movieobj6]);

 