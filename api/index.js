const express = require('express');
const mysql = require('mysql')
const cors = require('cors')


// Starting our app.
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors())

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'parking',
  });
  

app.get('/', (re, res)=> {
    return res.json("from back")
})

app.get('/parking', (req, res)=> {
    const sql = "SELECT * FROM parkingsports";
    connection.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
    
}) 

app.listen(5000, () => {
console.log("Running")
})