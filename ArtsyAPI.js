//this code downloads links to HD artwork pics and other related data

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
 .withTemplateParameters({ artist_id: "4d8b92b64eb68a1b2c000414",size:100 })
  .getResource(function(error, data) {
    console.log(error)
    data._embedded.artworks.map((artwork)=>{
      console.log(artwork.title);
      console.log(artwork.title);
      console.log(artwork._links.image.href.replace("{image_version}", "normalized"));
    })
    

  });
