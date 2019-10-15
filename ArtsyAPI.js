//this code shows first 20 artworks by Klimt

var traverson = require('traverson'),
    JsonHalAdapter = require('traverson-hal'),
    xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZGEwYjlmMDYzN2E4YzAwMTJhZWY3M2EiLCJleHAiOjE1NzE3MDY0MzEsImlhdCI6MTU3MTEwMTYzMSwiYXVkIjoiNWRhMGI5ZjA2MzdhOGMwMDEyYWVmNzNhIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVkYTUxYmJmYWRhNTU0MDAwZDVjNmUwYiJ9.HBST5xH5xAmAjD3Zyme3mBoeVIoqcoo2uzhn_nhvORM';

traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
api = traverson.from('https://api.artsy.net/api').jsonHal();

api.newRequest()
  .follow('artworks')
  .withRequestOptions({
    headers: {
      'X-Xapp-Token': xappToken,
      'Accept': 'application/vnd.artsy-v2+json'
    }
  })
 .withTemplateParameters({ artist_id: '4d8b92b64eb68a1b2c000414',size:20 })
  .getResource(function(error, andyWarhol) {
    console.log(andyWarhol._embedded.artworks);
  });