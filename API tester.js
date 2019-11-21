//this code requests all data about top 100 artworks from Artsy API and stores it into PostgresSQL database

const desiredNumberOfArtworks = 3;
const { Client } = require('pg');
// we are using traverson and traverson-hal modules for HATEOAS (Hypermedia as the Engine of Application State) API of artsy
const traverson = require('traverson');
const    JsonHalAdapter = require('traverson-hal');
//API key
const    xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZDlkMzJlZDEzNzkzYTAwMTIxY2I2M2EiLCJzYWx0X2hhc2giOiI4ZDdkYmM4ZTU4ODgzOGIyY2NiMzc1ZmJiMzAwOTgyZSIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwiZXhwIjoyMzYxNTU4NDc2LCJpYXQiOjE1NzI1NTM2NzYsImF1ZCI6IjUzZmYxYmNjNzc2ZjcyNDBkOTAwMDAwMCIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI1ZGJiNDNjYzAwNDRhNzAwMGVmYjBjYmQifQ.yzSzyerrj3qTRSNByL6HdRDqtlKgmN25ACP22wBxkyE";
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
.follow('artworks','_links','artists')
.withRequestOptions({
  headers: {
    'X-Xapp-Token': xappToken,
    'Accept': 'application/vnd.artsy-v2+json'
  }
})
//asking for 100 artworks
.withTemplateParameters({size:desiredNumberOfArtworks})
.getResource(function(error, data) {
  if (error) {
    console.log("API error:" + error)
  }
  else {
    console.log(data)
    //function escaps quotation mark and removing extra whitespace
    const trimData(string) => string.replace(/'/g, "").trim();
    //mapping all artworks and inserting required artworks data into db
    data._embedded.artworks.map((artwork,index)=>{
      if (artwork._links.image && artwork.category == "Painting" && artwork.title && artwork.medium && artwork._links.image && artwork.title && artwork.date){
        let query = `
        INSERT INTO artworks (artsy_id,
                              category,
                              medium,
                              image_url,
                              title,date)
        VALUES ('${trimData(artwork.id)}',
                'Painting',
                '${trimData(artwork.medium)}',
                '${trimData(artwork._links.image.href)}',
                '${trimData(artwork.title)}',
                '${trimData(artwork.date)}')`;
        
        client.query(query, function(err, data) {
          if(err) {
            console.log('Insert error: ', err, query);
          };
        });
      };
    });
  };
});

