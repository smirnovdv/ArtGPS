// {
//   "type": "xapp_token",
//   "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZGEwYjlmMDYzN2E4YzAwMTJhZWY3M2EiLCJleHAiOjE1NzE0MTkyNDgsImlhdCI6MTU3MDgxNDQ0OCwiYXVkIjoiNWRhMGI5ZjA2MzdhOGMwMDEyYWVmNzNhIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVkYTBiOWYwMjQzNjRjMDAxMTA3NWU3OSJ9.gph067EOBSAbq-04ZC2DRSe_QXDGqDKp-V12vutvkNA",
//   "expires_at": "2019-10-18T17:20:48+00:00",
//   "_links": {}
// }
var traverson = require('traverson'),
    JsonHalAdapter = require('traverson-hal'),
    xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZGEwYjlmMDYzN2E4YzAwMTJhZWY3M2EiLCJleHAiOjE1NzE0MTkyNDgsImlhdCI6MTU3MDgxNDQ0OCwiYXVkIjoiNWRhMGI5ZjA2MzdhOGMwMDEyYWVmNzNhIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVkYTBiOWYwMjQzNjRjMDAxMTA3NWU3OSJ9.gph067EOBSAbq-04ZC2DRSe_QXDGqDKp-V12vutvkNA';

traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
api = traverson.from('https://api.artsy.net/api').jsonHal();

api.newRequest()
  .follow('artist')
  .withRequestOptions({
    headers: {
      'X-Xapp-Token': xappToken,
      'Accept': 'application/vnd.artsy-v2+json'
    }
  })
  .withTemplateParameters({ id: 'andy-warhol' })
  .getResource(function(error, andyWarhol) {
    console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
  });