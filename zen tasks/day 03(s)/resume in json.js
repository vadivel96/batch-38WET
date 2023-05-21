<<<<<<< HEAD
/*********************************** Resume in json ******************************************/

var vadivel={
    basicInformation:{
        firstName:"vadivel",
        lastname:"J",
        emailid:"jvadivel.1996@gmail.com",
        phoneNumber:9597799914,
        nationality:"INDIAN",
        state:"tamil nadu",
        address:"125/38,azees colony 5th street,tiruvannamalai",
        "city/town":"tiruvannamalai",
        postalcode:606601,
    },
    workAndExperience:"I am a fresher,willing to work in full stack developer role  ",
    education:[
        {
            school:"gandhinagar matriculation higher secondary school,tiruvannamalai,606601.",
            "year of 10th pass":"2012",
            "year of 12th pass":"2014",
        },
        {
            college:"vel tech multi tech engineering college,avadi,chennai.",
            degree:"bachelor of engineering",
            department:"EEE",
            yearofpassed:2018,
        },
        
    ],
    skills:[
        "1)good knowledge in c,java,javascript",
        "2)well in front end technologies react.js",
        "3)knowledge in backend tools such as node.js",
        "4)good in database such as sql,mongoDB",
    ],
    languagesKnown:["English","Tamil"],
    intrests:[
        "1)cricket",
        "2)basketball",
        "3)chess",
        "4)watching cooking shows"
    
    ],
}
let vadiveljson=JSON.stringify(vadivel);
console.log(vadiveljson);
let vadivelobj=JSON.parse(vadiveljson);
console.log(vadivelobj);
=======
/*********************************** Resume in json ******************************************/

var vadivel={
    basicInformation:{
        firstName:"vadivel",
        lastname:"J",
        emailid:"jvadivel.1996@gmail.com",
        phoneNumber:9597799914,
        nationality:"INDIAN",
        state:"tamil nadu",
        address:"125/38,azees colony 5th street,tiruvannamalai",
        "city/town":"tiruvannamalai",
        postalcode:606601,
    },
    workAndExperience:"I am a fresher,willing to work in full stack developer role  ",
    education:[
        {
            school:"gandhinagar matriculation higher secondary school,tiruvannamalai,606601.",
            "year of 10th pass":"2012",
            "year of 12th pass":"2014",
        },
        {
            college:"vel tech multi tech engineering college,avadi,chennai.",
            degree:"bachelor of engineering",
            department:"EEE",
            yearofpassed:2018,
        },
        
    ],
    skills:[
        "1)good knowledge in c,java,javascript",
        "2)well in front end technologies react.js",
        "3)knowledge in backend tools such as node.js",
        "4)good in database such as sql,mongoDB",
    ],
    languagesKnown:["English","Tamil"],
    intrests:[
        "1)cricket",
        "2)basketball",
        "3)chess",
        "4)watching cooking shows"
    
    ],
}
let vadiveljson=JSON.stringify(vadivel);
console.log(vadiveljson);
let vadivelobj=JSON.parse(vadiveljson);
console.log(vadivelobj);
>>>>>>> 2448b4bb1f1db910687bbd658547e2ca0daae9f7
