var CartagenaGeoJSON= {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Pasando por la Torre del Reloj",
            audio_url: "https://selevari.github.io/sociologiasonidos/audio/cartagena.wav"
        },
        "geometry": {
          "coordinates": [
            -75.54920560919751,
            10.422971749442041
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(CartagenaGeoJSON, {onEachFeature: function (feature, layer) {
    var CartaPopup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(CartaPopup)
}

  }).addTo(mymap)