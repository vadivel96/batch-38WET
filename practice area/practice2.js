

async function covidcases(){
    let countryname=document.getElementById('search').value;
    const covidapi=await fetch (`https://api.covid19api.com/dayone/country/${countryname}`);
    const data=await covidapi.json();
    console.log(data); 
     
    let activedata=data.length-1;
    console.log(data[activedata].Active);
    activedata=data[activedata].Active;
    let para=document.getElementById('para').innerHTML=`totalcases:${activedata}`;


}