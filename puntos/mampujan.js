var MampujanGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Palabras a son del vallenato",
            audio_url: "https://selevari.github.io/sociologiasonidos/audio/mampujan.wav"
        },
        "geometry": {
          "coordinates": [
            -75.23535494557017,
            9.992742913084243
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(MampujanGeoJSON, {onEachFeature: function (feature, layer) {
    var MampujanPopup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(MampujanPopup)
}
  }).addTo(mymap)