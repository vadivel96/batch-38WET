<<<<<<< HEAD
var request2=new XMLHttpRequest();
request2.open('GET','https://restcountries.com/v3.1/all');
request2.send();
request2.onload= function print() {
    var countryData2=JSON.parse(this.responseText);
    console.log(countryData2);
    for (let country of countryData2) {
       console.log(country.flags) ;
     
    }
=======
var request2=new XMLHttpRequest();
request2.open('GET','https://restcountries.com/v3.1/all');
request2.send();
request2.onload= function print() {
    var countryData2=JSON.parse(this.responseText);
    console.log(countryData2);
    for (let country of countryData2) {
       console.log(country.flags) ;
     
    }
>>>>>>> 2448b4bb1f1db910687bbd658547e2ca0daae9f7
}