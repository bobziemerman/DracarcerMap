var urlVars = {};
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
  urlVars[key] = value;
});

var admin = (window.location.href.indexOf('admin') > -1)

var map = L.map('map', {
  crs: L.CRS.Simple,
  maxZoom: 5
});
var markers = new L.LayerGroup().addTo(map)

var yx = L.latLng;
var xy = function(x, y) {
        if (L.Util.isArray(x)) {    // When doing xy([x, y]);
                return yx(x[1], x[0]);
        }
        return yx(y, x);  // When doing xy(x, y);
};

var bounds = [xy(0, 0), xy(1000, 1000)];
var historyMod = 0


function renderMarkers(){
  markers.clearLayers();
  
  //Only render if their history mod is high enough (if relevant)
  generalMarkers.map(function(marker){
    if(admin || !marker.history || parseInt(marker.history) <= parseInt(historyMod)) {
      var popup = L.popup({'closeButton':false}).setContent(marker.text)
      L.marker(xy(marker.x, marker.y), {icon: icons[marker.color]}).addTo(markers).bindPopup(popup)
    }
  })

  //Only render these if 'admin' is in the url
  if(admin){
    adminMarkers.map(function(marker){
    var popup = L.popup({'closeButton':false}).setContent(marker.text)
      L.marker(xy(marker.x, marker.y), {icon: icons[marker.color]}).addTo(markers).bindPopup(popup)
    })
  }

  if(urlVars['party'] && urlVars.party === 'strings') {
    stringsMarkers.map(function(marker){
    var popup = L.popup({'closeButton':false}).setContent(marker.text)
      L.marker(xy(marker.x, marker.y), {icon: icons['green']}).addTo(markers).bindPopup(popup)
    })

  }
}
renderMarkers()



function historyChange(value) {
  historyMod = value
  renderMarkers();
}

//Add a legend
var legend = L.control({position: 'topright'});
legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend');
  div.innerHTML = 
    '<div><i style="background-color: #CCC"></i> Location</div>'+
    '<div><i style="background-color: #e24646"></i> Creature(s)</div>'+
    '<div><i style="background-color: #4589f7"></i> Person(s)</div>'+
    '<div><i style="background-color: #952bad"></i> Object</div>'+
    '<div><i style="background-color: #ede06d"></i> Event</div>'+
    (urlVars['party']?'<div><i style="background-color: #00d60a"></i> Party history</div>':'')+
    '<br/>History mod: +<input type="number" class="history" value="0" min="0" onchange="historyChange(this.value)" />'

  return div;
};
legend.addTo(map);

//Render map
map.setView(xy(500, 400), 0);

//Define objects for all the image resolutions
var image1k = L.imageOverlay('/dracarcer-map/img/aidilon_v2_no_hidden_1000px_comp.jpg', bounds);
var image2k = L.imageOverlay('/dracarcer-map/img/aidilon_v2_no_hidden_2000px_comp.jpg', bounds);
var image8k = L.imageOverlay('/dracarcer-map/img/aidilon_v2_no_hidden_8000px_comp.jpg', bounds);
//var image8k = L.imageOverlay('/dracarcer-map/img/aidilon_v2_plain_8000px_comp.jpg', bounds);

//Default to 1k
image1k.addTo(map)

function removeMaps() {
  image1k.removeFrom(map);
  image2k.removeFrom(map);
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
