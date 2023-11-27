var map = L.map('mapid').setView([48.8566, 31.1656], 6);

var locationIcon = L.icon({
    iconUrl: '../../../assets/images/contact/marker.svg',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Create marker for new location
var marker = L.marker([48.8566, 31.1656], { icon: locationIcon }).addTo(map);

// Determine the content of the pop-up
var popupContent = "<b>Ukraine</b><br/>Information about Ukraine here.";

// Add the pop-up window to the map
marker.bindPopup(popupContent);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Carto'
}).addTo(map);

var apiKey = '07C4A129-9D26-4B3D-9BC8-B22E4B6E509E';
L.tileLayer.webatlas({
    mapType: L.TileLayer.Webatlas.Type.AERIAL,
    apikey: apiKey
}).addTo(map);

var overlay = L.layerGroup().addTo(map);
overlay.addLayer(L.rectangle(map.getBounds(), { color: "#000000", fillOpacity: 0.8, weight: 1 }).addTo(overlay));
