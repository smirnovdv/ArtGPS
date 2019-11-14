//this code iterates through the SQL database and finds an artist for each artwork, saves them to artists,artwork tables

//API module
const traverson = require('traverson');
const    JsonHalAdapter = require('traverson-hal');
//API key
const    xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZDlkMzJlZDEzNzkzYTAwMTIxY2I2M2EiLCJzYWx0X2hhc2giOiI4ZDdkYmM4ZTU4ODgzOGIyY2NiMzc1ZmJiMzAwOTgyZSIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwiZXhwIjoyMzYxNTU4NDc2LCJpYXQiOjE1NzI1NTM2NzYsImF1ZCI6IjUzZmYxYmNjNzc2ZjcyNDBkOTAwMDAwMCIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI1ZGJiNDNjYzAwNDRhNzAwMGVmYjBjYmQifQ.yzSzyerrj3qTRSNByL6HdRDqtlKgmN25ACP22wBxkyE";
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
//endpoint
api = traverson.from('https://api.artsy.net/api').jsonHal();


//function that trims API data and escapes '''''' so we can use this data in SQL queries
const trimData = (string) => string.replace(/'/g, "").trim();


//db setup
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

//selecting all artworks from db
client.query(`SELECT artsy_id FROM artworks WHERE artist_id IS NULL LIMIT 350`, function(err, data) {
	if(err) {
		console.log('SQL read error: ', err);
		client.end();
	}
	else {
		//making artist request for every artwork using artwork_id
		data.rows.forEach((item)=>{
			setTimeout(()=>{
				api.newRequest()
				.follow('artists')
				.withRequestOptions({
				headers: {
					'X-Xapp-Token': xappToken,
					'Accept': 'application/vnd.artsy-v2+json'
				}
				})
				.withTemplateParameters({artwork_id:item.artsy_id.trim()})
				.getResource(function(error, data) {
					if (error) {
						console.log("API error:" + error);
					}
					else {
						//saving all data to our db
						data._embedded.artists.map((response)=>{
							if (response.id && response.name && response.birthday && response.hometown) {
								const queryUpdateArtistId =
								`UPDATE artworks
								SET artist_id = '${response.id}'
								WHERE artsy_id = '${item.artsy_id.trim()}';
								INSERT INTO artists (artsy_id,name,birthday,hometown)
								VALUES ('${trimData(response.id)}',
										'${trimData(response.name)}',
										'${trimData(response.birthday)}',
										'${trimData(response.hometown)}');
								`
								client.query(queryUpdateArtistId,
										function(err, data) {
										if(err) {
											console.log('Insert error: ', err, queryUpdateArtistId);
										}
										else {
											console.log(response.name + " saved");
										}
								});
							}
						});
					};
				});
			},500)
		})
	}
});












