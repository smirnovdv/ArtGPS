//this code is a template to interact with our SQL database
const { Client } = require('pg');

//db connection params
let connectionObject = {
    host : "127.0.0.1",
    database : "art_gps",
    port : 5432,
    user : "postgres",
    password : "2000"
 }

//connecting to the db
const client = new Client(connectionObject);
client.connect()
.then( function(returnedData) {
    console.log(`Connected to ${client.database} dB`);
})
.catch( function(err) {
    console.error('connection error', err.stack)
});

//making a query
let query =`
INSERT INTO artworks (id,artsy_id,category,medium,image_url,title,date)
VALUES (0,'4d8b92eb4eb68a1b2c000968','Painting','Oil and gold leaf on canvas','https://d32dm0rphc51dk.cloudfront.net/NOpIAwQa-3r51Cg9qXKbfA/{image_version}.jpg','Der Kuss (The Kiss)','1907')`;

client.query(query, function(err, data) {
    if(err) {
        console.log('Error: ', err);
    };
    console.log(data);
    client.end();
})
