<<<<<<< HEAD


                                     //fetching rest countries for card 1
let submit1=document.getElementById('submit1').addEventListener('click', async()=>{
       let country1=document.getElementById('searchCard1').value;
       const res= await fetch(`https://restcountries.com/v3.1/name/${country1}`);
       const data= await res.json();
       console.log(data[0]);

                                   //creating div dynamically
       let div1=document.createElement('div');
       let form1=document.querySelector('#form1');
       form1.append(div1);

                               //fetched rest api details in document
       div1.innerHTML=` <img src="${data[0].flags.svg}"  class="card-img-top h-auto w-50" alt="india flag img">
       <div class="card-body">
         <h5 class="card-title">${country1}</h5>
         <p class="card-text">capital:${data[0].capital[0]}</p>
         <p class="card-text">region:${data[0].region}</p>
         <p class="card-text">countrycode:${data[0].idd.root}${data[0].idd.suffixes} </p> 
         <button type="button" class="btn btn-secondary" id="w1btn">click for weather</button>`

                             //fetching weather api for card 1
         let weather1=document.getElementById('w1btn').addEventListener('click',async()=>{
            const wapi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[0].capital}&appid=c49e92241d4de31b9a48227537b2c675`)
             const data2=await wapi.json();

                                  //creating div dynamically
             let div2=document.createElement('div');
            form1.append(div2);

                                    //fetched weather api details in document
            div2.innerHTML=`
            <p class="card-text">humidity:<mark>${data2.main.humidity}</mark></p>
            <p class="card-text">pressure:<mark>${data2.main.pressure}</mark></p>
            <p class="card-text">temp:<mark>${data2.main.temp} kelvin</mark></p>`
        })     
         
        })

        


                                  //fetching rest countries for card 2
let submit2=document.getElementById('submit2').addEventListener('click', async()=>{
     let country2=document.getElementById('searchCard2').value;
    const res= await fetch(`https://restcountries.com/v3.1/name/${country2}`);
    const data= await res.json();
    console.log(data[0]);

                                     //creating div dynamically
    let div=document.createElement('div');
    let form2=document.querySelector('#form2');
    form2.append(div);

                                      //fetched rest api details in document
    div.innerHTML=` <img src="${data[0].flags.svg}"  class="card-img-top h-auto w-50" alt="india flag img">
    <div class="card-body">
      <h5 class="card-title">${country2}</h5>
      <p class="card-text">capital:${data[0].capital[0]}</p>
      <p class="card-text">region:${data[0].region}</p>
      <p class="card-text">countrycode:${data[0].idd.root}${data[0].idd.suffixes} </p> 
      <button type="button" class="btn btn-secondary" id="w2btn">click for weather</button>`

                                     //fetching weather api for card 2                                  
      let weather2=document.getElementById('w2btn').addEventListener('click',async()=>{
        const wapi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[0].capital}&appid=c49e92241d4de31b9a48227537b2c675`)
         const data2=await wapi.json();

                                     //creating div dynamically
         let div2=document.createElement('div');
        form2.append(div2);

                                   //fetched weather api details in document
        div2.innerHTML=`
        <p class="card-text">humidity:<mark>${data2.main.humidity}</mark></p>
        <p class="card-text">pressure:<mark>${data2.main.pressure}</mark></p>
        <p class="card-text">temp:<mark>${data2.main.temp} kelvin</mark></p>`
    }) 
   
})
                        //fetching rest countries for card 3
let submit3=document.getElementById('submit3').addEventListener('click', async()=>{
    let country3=document.getElementById('searchCard3').value;
    const res= await fetch(`https://restcountries.com/v3.1/name/${country3}`);
    const data= await res.json();
    console.log(data[0]);

                       //creating div dynamically
    let div=document.createElement('div');
    let form3=document.querySelector('#form3');
    form3.append(div);

                       //fetched rest api details in document
    div.innerHTML=` <img src="${data[0].flags.svg}"  class="card-img-top h-auto w-50" alt="india flag img">
    <div class="card-body">
      <h5 class="card-title">${country3}</h5>
      <p class="card-text">capital:${data[0].capital[0]}</p>
      <p class="card-text">region:${data[0].region}</p>
      <p class="card-text">countrycode:${data[0].idd.root}${data[0].idd.suffixes} </p> 
      <button type="button" class="btn btn-secondary" id="w3btn">click for weather</button>`

                                  //fetching weather api for card 3
      let weather1=document.getElementById('w3btn').addEventListener('click',async()=>{
        const wapi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[0].capital}&appid=c49e92241d4de31b9a48227537b2c675`)
         const data2=await wapi.json();

                        //creating div dynamically
         let div2=document.createElement('div');
        form3.append(div2);

                         //fetched weather api details in document
        div2.innerHTML=`
        <p class="card-text">humidity:<mark>${data2.main.humidity}</mark></p>
        <p class="card-text">pressure:<mark>${data2.main.pressure}</mark></p>
        <p class="card-text">temp:<mark>${data2.main.temp} kelvin</mark></p>`
    }) 
   
})





=======


                                     //fetching rest countries for card 1
let submit1=document.getElementById('submit1').addEventListener('click', async()=>{
       let country1=document.getElementById('searchCard1').value;
       const res= await fetch(`https://restcountries.com/v3.1/name/${country1}`);
       const data= await res.json();
       console.log(data[0]);

                                   //creating div dynamically
       let div1=document.createElement('div');
       let form1=document.querySelector('#form1');
       form1.append(div1);

                               //fetched rest api details in document
       div1.innerHTML=` <img src="${data[0].flags.svg}"  class="card-img-top h-auto w-50" alt="india flag img">
       <div class="card-body">
         <h5 class="card-title">${country1}</h5>
         <p class="card-text">capital:${data[0].capital[0]}</p>
         <p class="card-text">region:${data[0].region}</p>
         <p class="card-text">countrycode:${data[0].idd.root}${data[0].idd.suffixes} </p> 
         <button type="button" class="btn btn-secondary" id="w1btn">click for weather</button>`

                             //fetching weather api for card 1
         let weather1=document.getElementById('w1btn').addEventListener('click',async()=>{
            const wapi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[0].capital}&appid=c49e92241d4de31b9a48227537b2c675`)
             const data2=await wapi.json();

                                  //creating div dynamically
             let div2=document.createElement('div');
            form1.append(div2);

                                    //fetched weather api details in document
            div2.innerHTML=`
            <p class="card-text">humidity:<mark>${data2.main.humidity}</mark></p>
            <p class="card-text">pressure:<mark>${data2.main.pressure}</mark></p>
            <p class="card-text">temp:<mark>${data2.main.temp} kelvin</mark></p>`
        })     
         
        })

        


                                  //fetching rest countries for card 2
let submit2=document.getElementById('submit2').addEventListener('click', async()=>{
     let country2=document.getElementById('searchCard2').value;
    const res= await fetch(`https://restcountries.com/v3.1/name/${country2}`);
    const data= await res.json();
    console.log(data[0]);

                                     //creating div dynamically
    let div=document.createElement('div');
    let form2=document.querySelector('#form2');
    form2.append(div);

                                      //fetched rest api details in document
    div.innerHTML=` <img src="${data[0].flags.svg}"  class="card-img-top h-auto w-50" alt="india flag img">
    <div class="card-body">
      <h5 class="card-title">${country2}</h5>
      <p class="card-text">capital:${data[0].capital[0]}</p>
      <p class="card-text">region:${data[0].region}</p>
      <p class="card-text">countrycode:${data[0].idd.root}${data[0].idd.suffixes} </p> 
      <button type="button" class="btn btn-secondary" id="w2btn">click for weather</button>`

                                     //fetching weather api for card 2                                  
      let weather2=document.getElementById('w2btn').addEventListener('click',async()=>{
        const wapi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[0].capital}&appid=c49e92241d4de31b9a48227537b2c675`)
         const data2=await wapi.json();

                                     //creating div dynamically
         let div2=document.createElement('div');
        form2.append(div2);

                                   //fetched weather api details in document
        div2.innerHTML=`
        <p class="card-text">humidity:<mark>${data2.main.humidity}</mark></p>
        <p class="card-text">pressure:<mark>${data2.main.pressure}</mark></p>
        <p class="card-text">temp:<mark>${data2.main.temp} kelvin</mark></p>`
    }) 
   
})
                        //fetching rest countries for card 3
let submit3=document.getElementById('submit3').addEventListener('click', async()=>{
    let country3=document.getElementById('searchCard3').value;
    const res= await fetch(`https://restcountries.com/v3.1/name/${country3}`);
    const data= await res.json();
    console.log(data[0]);

                       //creating div dynamically
    let div=document.createElement('div');
    let form3=document.querySelector('#form3');
    form3.append(div);

                       //fetched rest api details in document
    div.innerHTML=` <img src="${data[0].flags.svg}"  class="card-img-top h-auto w-50" alt="india flag img">
    <div class="card-body">
      <h5 class="card-title">${country3}</h5>
      <p class="card-text">capital:${data[0].capital[0]}</p>
      <p class="card-text">region:${data[0].region}</p>
      <p class="card-text">countrycode:${data[0].idd.root}${data[0].idd.suffixes} </p> 
      <button type="button" class="btn btn-secondary" id="w3btn">click for weather</button>`

                                  //fetching weather api for card 3
      let weather1=document.getElementById('w3btn').addEventListener('click',async()=>{
        const wapi=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data[0].capital}&appid=c49e92241d4de31b9a48227537b2c675`)
         const data2=await wapi.json();

                        //creating div dynamically
         let div2=document.createElement('div');
        form3.append(div2);

                         //fetched weather api details in document
        div2.innerHTML=`
        <p class="card-text">humidity:<mark>${data2.main.humidity}</mark></p>
        <p class="card-text">pressure:<mark>${data2.main.pressure}</mark></p>
        <p class="card-text">temp:<mark>${data2.main.temp} kelvin</mark></p>`
    }) 
   
})





>>>>>>> 2448b4bb1f1db910687bbd658547e2ca0daae9f7
