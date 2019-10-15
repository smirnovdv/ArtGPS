Concept

1) Limiting our scope


We decided to focus on modern art, picked 6 art styles and one artist for each style:

Symbolism - Gustav Klimt   artist_id: '4d8b92b64eb68a1b2c000414'
Impressionism - Monet   '4d8b92774eb68a1b2c000134'
Surrealism - Dali  '4dadcce67129f059240009df'
Cubism - Picasso  '4d8b928b4eb68a1b2c0001f2'
Futurism - Malevich  '4d8b92694eb68a1b2c0000ac'
Pop art - Warhol  '4d8b92b34eb68a1b2c0003f4'

2) APIs shortlist  
https://developer.deeparteffects.com/  
https://metmuseum.github.io/  
https://pro.europeana.eu/resources/apis/intro  

Artsy API returns following JSON

Artist:
[
 {
    "_id": "4d8b928b4eb68a1b2c0001f2",
    "id": "pablo-picasso",
    "sortable_id": "picasso-pablo",
    "name": "Pablo Picasso",
    "years": "1881-1973",
    "public": true,
    "birthday": "1881",
    "consignable": true,
    "deathday": "1973",
    "nationality": "Spanish",
    "published_artworks_count": 3607,
    "forsale_artworks_count": 1687,
    "artworks_count": 4912,
    "original_width": 1716,
    "original_height": 1192,
    "image_url": "https://d32dm0rphc51dk.cloudfront.net/i3rCA3IaKE-cLBnc-U5swQ/:version.jpg",
    "image_versions": [
      "four_thirds",
      "large",
      "square",
      "tall"
    ],
    "image_urls": {
      "four_thirds": "https://d32dm0rphc51dk.cloudfront.net/i3rCA3IaKE-cLBnc-U5swQ/four_thirds.jpg",
      "large": "https://d32dm0rphc51dk.cloudfront.net/i3rCA3IaKE-cLBnc-U5swQ/large.jpg",
      "square": "https://d32dm0rphc51dk.cloudfront.net/i3rCA3IaKE-cLBnc-U5swQ/square.jpg",
      "tall": "https://d32dm0rphc51dk.cloudfront.net/i3rCA3IaKE-cLBnc-U5swQ/tall.jpg"
    }
  }
]

Artwork by artist id "pablo-picasso"

{
  "total_count": null,
  "_links": {
    "self": {
      "href": "https://api.artsy.net/api/artworks?artist_id=4d8b928b4eb68a1b2c0001f2"
    },
    "next": {
      "href": "https://api.artsy.net/api/artworks?artist_id=4d8b928b4eb68a1b2c0001f2&cursor=515b0f9338ad2d78ca000554%3A515b0f9338ad2d78ca000554"
    }
  },
  "_embedded": {
    "artworks": [
      {
        "id": "515b0f9338ad2d78ca000554",
        "slug": "pablo-picasso-the-frugal-repast-le-repas-frugal",
        "created_at": "2013-04-02T17:04:19+00:00",
        "updated_at": "2019-04-24T12:55:15+00:00",
        "title": "The Frugal Repast (Le repas frugal)",
        "category": "Print",
        "medium": "Etching (zinc)",
        "date": "1904",
        "dimensions": {
          "in": {
            "text": "18 1/4 × 14 13/16 in",
            "height": 18.25,
            "width": 14.8125,
            "depth": null,
            "diameter": null
          },
          "cm": {
            "text": "46.4 × 37.6 cm",
            "height": 46.4,
            "width": 37.6,
            "depth": null,
            "diameter": null
          }
        },
        "published": true,
        "website": "",
        "signature": "",
        "series": "",
        "provenance": "",
        "literature": "",
        "exhibition_history": "",
        "collecting_institution": "National Gallery of Art, Washington D.C.",
        "additional_information": "\n    plate: 46.3 x 37.7 cm (18 1/4 x 14 13/16 in.)\n    ",
        "image_rights": "Courtesy National Gallery of Art, Washington",
        "blurb": "",
        "unique": false,
        "cultural_maker": null,
        "iconicity": 61.138387608996126,
        "can_inquire": false,
        "can_acquire": false,
        "can_share": true,
        "sale_message": null,
        "sold": false,
        "image_versions": [
          "large",
          "large_rectangle",
          "larger",
          "medium",
          "medium_rectangle",
          "normalized",
          "small",
          "square",
          "tall"
        ],
        "_links": {
          "thumbnail": {
            "href": "https://d32dm0rphc51dk.cloudfront.net/xgKq1MH3kzLsV5o8NUynJA/medium.jpg"
          },
          "image": {
            "href": "https://d32dm0rphc51dk.cloudfront.net/xgKq1MH3kzLsV5o8NUynJA/{image_version}.jpg",
            "templated": true
          },
          "partner": {
            "href": "https://api.artsy.net/api/partners/4f99c7b793ab4b0001000179"
          },
          "self": {
            "href": "https://api.artsy.net/api/artworks/515b0f9338ad2d78ca000554"
          },
          "permalink": {
            "href": "https://www.artsy.net/artwork/pablo-picasso-the-frugal-repast-le-repas-frugal"
          },
          "genes": {
            "href": "https://api.artsy.net/api/genes?artwork_id=515b0f9338ad2d78ca000554"
          },
          "artists": {
            "href": "https://api.artsy.net/api/artists?artwork_id=515b0f9338ad2d78ca000554"
          },
          "similar_artworks": {
            "href": "https://api.artsy.net/api/artworks?similar_to_artwork_id=515b0f9338ad2d78ca000554"
          },
          "collection_users": {
            "href": "https://api.artsy.net/api/users?collected_artwork_id=515b0f9338ad2d78ca000554"
          }
        },
        "_embedded": {
          "editions": []
        }
      }
    ]
  }
}