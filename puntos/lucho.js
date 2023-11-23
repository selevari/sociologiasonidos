var LuchoGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Al son del Vallenato en la Escuela de Música Lucho Bermúdez",
            audio_url: "https://selevari.github.io/sociologiasonidos/audio/lucho.mp3"
        },
        "geometry": {
          "coordinates": [
            -75.12103694929753,
            9.714057919349486
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(LuchoGeoJSON, {onEachFeature: function (feature, layer) {
    var LuchoPopup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(LuchoPopup)
}
  }).addTo(mymap)