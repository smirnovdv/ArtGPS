const express = require('express');
const app = express();

const { Client } = require('pg');
let connectionObject = {
    host : "127.0.0.1",
    database : "art_gps",
    port : 5432,
    user : "postgres",
    password : "2000"
};

const client = new Client(connectionObject);
client.connect()
.then( function(returnedData) {
  console.log(`Connected to ${client.database} dB`);
})
.catch( function(err) {
  console.error('connection error', err.stack)
});

  //handling CORS
// app.use((req,res,next) => {
//     res.header('Access-Control-Allow-Origin','*');
    
// });

  

app.get('/api',(req,res)=>{
    
    let query = `SELECT * FROM artworks
                  ORDER BY RANDOM() LIMIT 1` 
              
    client.query(query, function(err, data) {
      console.log(err,data.rows[0]);
      res.send(data.rows[0]);
      
    });



});


app.listen(3001, ()=>{
    console.log("Server is running on port 3001")
})

