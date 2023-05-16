var express = require('express');
var router = express.Router();
var mysql=require('mysql2');
require('dotenv').config();

const db=mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'hallBooking',
  

})

db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
 
});




/* GET home page. */

router.get('/', function(req, res, next) {
  console.log('working')
  db.query('SELECT * FROM CUSTOMER',((err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send({customerDetails:result});
    }
  }))
  
});

module.exports = router;
