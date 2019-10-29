//this code requests all data about top 100 artworks from Artsy API and stores it into PostgresSQL database

const desiredNumberOfArtworks = 100;
const { Client } = require('pg');
// we are using traverson and traverson-hal modules for HATEOAS (Hypermedia as the Engine of Application State) API of artsy
const traverson = require('traverson');
const    JsonHalAdapter = require('traverson-hal');
//API key
const    xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZGIzMjlkNGUwMGViMTAwMTI1OGI3YWQiLCJleHAiOjE1NzI2Mjc1NDEsImlhdCI6MTU3MjAyMjc0MSwiYXVkIjoiNWRiMzI5ZDRlMDBlYjEwMDEyNThiN2FkIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVkYjMyOWQ1ZmFmMjRlMDAwZjdjMDgyYiJ9.lr6zbXVbXCYT1tn-X1DnW2P4i6RfNzcQeCBi2lD3rsI";
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
//endpoint
api = traverson.from('https://api.artsy.net/api').jsonHal();


//this code connects with SQL database
//db connection params
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



//making request for artworks where artist has particular artist_id, returning max of 100 artworks
api.newRequest()
.follow('artworks')
.withRequestOptions({
  headers: {
    'X-Xapp-Token': xappToken,
    'Accept': 'application/vnd.artsy-v2+json'
  }
})
//asking for 100 artworks
.withTemplateParameters({ size:desiredNumberOfArtworks})
.getResource(function(error, data) {
  if (error) {
    console.log("API error:" + error)
  }
  else {
    //mapping all artworks, escaping quotation mark and inserting required artworks data into db
    data._embedded.artworks.map((artwork,index)=>{
      let query = `
      INSERT INTO artworks (id,artsy_id,category,medium,image_url,title,date)
      VALUES (${index},'${artwork.id}','${artwork.category}','${artwork.medium}','${artwork._links.image.href}','${artwork.title.replace(/'/g, "")}','${artwork.date}')`;
      
      client.query(query, function(err, data) {
        if(err) {
          console.log('Insert error: ', err, query);
        };
      });
    });
  };
});

