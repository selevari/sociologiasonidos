var PalenqueGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Palenque: Un rincón de África en Colombia",
            audio_url: "https://selevari.github.io/sociologiasonidos/audio/palenque.wav"
        },
        "geometry": {
          "coordinates": [
            -75.20003966701503,
            10.104072333472843
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(PalenqueGeoJSON, {onEachFeature: function (feature, layer) {
    var PalenquePopup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(PalenquePopup)
}
  }).addTo(mymap)
