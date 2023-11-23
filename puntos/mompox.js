var MompoxGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Pasos por el Colegio Pinillos, Mompox",
            audio_url: "https://selevari.github.io/sociologiasonidos/audio/mompox.mp4"
        },
        "geometry": {
          "coordinates": [
            -74.42533783061329,
            9.240181412551664
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(MompoxGeoJSON, {onEachFeature: function (feature, layer) {
    var MompoxPopup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(MompoxPopup)
}
  }).addTo(mymap)