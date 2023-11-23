var RinconGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "En las aguas del Rincón del Mar",
            audio_url: "https://selevari.github.io/sociologiasonidos/audio/mar.mp3"
        },
        "geometry": {
          "coordinates": [
            -75.64098394543876,
            9.763647594667276
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(RinconGeoJSON, {onEachFeature: function (feature, layer) {
    var RinconPopup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(RinconPopup)
}
  }).addTo(mymap)