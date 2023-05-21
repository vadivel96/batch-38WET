
async function movies(){

    let movieName="xxx"
    let codes=await fetch(`https://imdb-api.com/en/API/SearchMovie/k_sbetdkeb/${movieName}`);
    let moviedetail= await codes.json();
     console.log(moviedetail);
   
      }
  movies();
      const gokul= new Promise((resolved,rejected)=>{
   
        if(1>2){
           resolved('moviedetail')
        }
        else{
         rejected('moviedetail')
        }
        return 0;
       })
gokul.then(data=>console.log(data));
gokul.catch(data=>console.log(data));

// const checkNumber = (n1) => {
//     const PromiseData = new Promise((resoved, rejected) => {
//         if(typeof(n1) === 'number' && n1>10) {
//             resoved("Resolved : Number is greater than 10")
//         } else {
//             rejected(`Rejected : Number ${n1} is less 10`)
//         }
//     })
//     return PromiseData;
// }


// checkNumber(5)
// .then((datum) => console.log(datum))
// .catch((err) => console.log(err))
