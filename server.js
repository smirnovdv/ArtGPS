const express = require('express');
const app = express();

let port = process.env.PORT || 3001;

//db connection
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

//handling requests
app.get('/get_challenge',(req,res)=>{
    let query = `SELECT * FROM artworks
                 ORDER BY RANDOM() LIMIT 3
                ` 
    client.query(query, function(err, data) {
      console.log(err,data.rows);
      res.send(data.rows);
      
    });

});

app.get('/get_inspiration',(req,res)=>{
  let query = `SELECT * FROM modern_artists
               WHERE id = ${req.query.id}
              ` 
  console.log(query)        
  client.query(query, function(err, data) {
    console.log(err,data.rows);
    res.send(data.rows);
  });

});

app.get('/challenge_leaderboard',(req,res)=>{
  let query = `SELECT * FROM users
               LIMIT 5
              ` 
  client.query(query, function(err, data) {
    console.log(err,data.rows);
    res.send(data.rows);
    
  });
})

app.post('/challenge_leaderboard'),(req,res)=>{
  challenge_leaderboard  
}


app.listen(port, ()=>{
    console.log("Server is running on port 3001")
})

