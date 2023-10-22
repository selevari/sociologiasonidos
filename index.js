var mymap = L.map("mapid").setView([9.275, -74.854], 6.5)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mymap)