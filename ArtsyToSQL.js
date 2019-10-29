//this code downloads links to HD artwork pics and other related data

//this code connects with SQL database
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

// we are using traverson and traverson-hal modules for HATEOAS (Hypermedia as the Engine of Application State) API of artsy
const traverson = require('traverson');
const    JsonHalAdapter = require('traverson-hal');
  //API key
const    xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZGIzMjlkNGUwMGViMTAwMTI1OGI3YWQiLCJleHAiOjE1NzI2Mjc1NDEsImlhdCI6MTU3MjAyMjc0MSwiYXVkIjoiNWRiMzI5ZDRlMDBlYjEwMDEyNThiN2FkIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVkYjMyOWQ1ZmFmMjRlMDAwZjdjMDgyYiJ9.lr6zbXVbXCYT1tn-X1DnW2P4i6RfNzcQeCBi2lD3rsI";
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
//endpoint
api = traverson.from('https://api.artsy.net/api').jsonHal();
//making request for artworks wher artist has paticular artist_id, returning max of 100 artworks
  api.newRequest()
  .follow('artworks')
  .withRequestOptions({
    headers: {
      'X-Xapp-Token': xappToken,
      'Accept': 'application/vnd.artsy-v2+json'
    }
  })
.withTemplateParameters({ size:100})
.getResource(function(error, data) {
    console.log("API error:" + error)
    data._embedded.artworks.map((artwork,index)=>{
      let query =`
      INSERT INTO artworks (id,artsy_id,category,medium,image_url,title,date)
      VALUES (${index},'${artwork.id}','${artwork.category}','${artwork.medium}','${artwork._links.image.href}','${artwork.title.replace(/'/g, "")}','${artwork.date}')`;
      
      client.query(query, function(err, data) {
        if(err) {
          console.log('Insert error: ', err, query);
        };
        
      });
      // console.log(`
      //   index: ${index}
      //   id: ${artwork.id} 
      //   title: ${artwork.title} 
      //   category: ${artwork.category} 
      //   medium: ${artwork.medium} 
      //   date: ${artwork.date} 
      //   image: ${artwork._links.image.href} `
      //   );
      
    })
    // data._embedded.artworks.map((artwork)=>{
    //   console.log(`
    //     id: ${artwork.id} 
    //     title: ${artwork.title} 
    //     category: ${artwork.category} 
    //     medium: ${artwork.medium} 
    //     date: ${artwork.date} 
    //     image: ${artwork._links.image.href} `
    //     );
      // console.log(artwork._links.image.href.replace("{image_version}", "medium"));
});

