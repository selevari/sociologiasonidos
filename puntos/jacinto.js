var JacintoGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Tejiendo en el Museo Vivo Olivia Carmona",
            audio_url: "https://selevari.github.io/sociologiasonidos/audio/jacinto.wav"
        },
        "geometry": {
          "coordinates": [
            -75.1227517181448,
            9.83061082785909
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(JacintoGeoJSON, {onEachFeature: function (feature, layer) {
    var JacintoPopup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(JacintoPopup)
}
  }).addTo(mymap)