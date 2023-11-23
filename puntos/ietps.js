var IetpsGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Jugando voleibol en la Institución Educativa de Promoción Social",
            audio_url: "https://selevari.github.io/sociologiasonidos/audio/ietps.mp3"
        },
        "geometry": {
          "coordinates": [
            -75.11518342886222,
            9.705840176691026
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(IetpsGeoJSON, {onEachFeature: function (feature, layer) {
    var IetPopup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(IetPopup)
}

  }).addTo(mymap)