var map = L.map('map', {
  crs: L.CRS.Simple,
  maxZoom: 4
});

var yx = L.latLng;
var xy = function(x, y) {
        if (L.Util.isArray(x)) {    // When doing xy([x, y]);
                return yx(x[1], x[0]);
        }
        return yx(y, x);  // When doing xy(x, y);
};

var bounds = [xy(0, 0), xy(1000, 1000)];

generalMarkers.map(function(marker){
  var popup = L.popup({'closeButton':false}).setContent(marker.text)
  L.marker(xy(marker.x, marker.y), {icon: icons[marker.color]}).addTo(map).bindPopup(popup)
})

//Only render these if 'admin' is in the url
if(window.location.href.indexOf('admin') > -1){
  adminMarkers.map(function(marker){
  var popup = L.popup({'closeButton':false}).setContent(marker.text)
    L.marker(xy(marker.x, marker.y), {icon: icons[marker.color]}).addTo(map).bindPopup(popup)
  })
}

var legend = L.control({position: 'topright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');

    div.innerHTML = 
        '<i style="background-color: grey"></i> Capital'+'<br/>'+
        '<i style="background-color: #CCC"></i> City'+'<br/>'+
        '<i style="background-color: #e24646"></i> Creature'+'<br/>'+
        ''

    return div;
};

legend.addTo(map);


map.setView(xy(500, 400), 0);

//Devine objects for all the image resolutions
var image1k = L.imageOverlay('/dracarcer-map/img/aidilon_v2_plain_1000px_comp.jpg', bounds);
var image2k = L.imageOverlay('/dracarcer-map/img/aidilon_v2_plain_2000px_comp.jpg', bounds);
//var image4k = L.imageOverlay('/dracarcer-map/img/aidilon_v2_plain_4000px_comp.jpg', bounds);
var image8k = L.imageOverlay('/dracarcer-map/img/aidilon_v2_plain_8000px_comp.jpg', bounds);

//Default to 1k
image1k.addTo(map)

function removeMaps() {
  image1k.removeFrom(map);
  image2k.removeFrom(map);
  //image4k.removeFrom(map);
  image8k.removeFrom(map);
}

//When zoom changes, change map
map.on('zoom', function(){
  removeMaps()
  var z = map.getZoom()
  if(z === 0) {
    image1k.addTo(map)
  } else if(z < 2){
    image2k.addTo(map)
  } else{
    image8k.addTo(map)
  } 
})


//Print x/y to console on click for debug/data editing purposes
map.on('click', function(e){
console.log(e.latlng.lng+' '+e.latlng.lat)
})
