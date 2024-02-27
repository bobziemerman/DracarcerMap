var urlVars = {};
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
  urlVars[key] = value;
});

//URL controls
var admin = (window.location.href.indexOf('admin') > -1)
var danger = (window.location.href.indexOf('danger') > -1)
var domain = (window.location.href.indexOf('domain') > -1)
var labels = (window.location.href.indexOf('labels') > -1)

var map = L.map('map', {
  crs: L.CRS.Simple,
  maxZoom: 5
});
map.doubleClickZoom.disable()
var markers = new L.LayerGroup().addTo(map)

var yx = L.latLng;
var xy = function(x, y) {
        if (L.Util.isArray(x)) {    // When doing xy([x, y]);
                return yx(x[1], x[0]);
        }
        return yx(y, x);  // When doing xy(x, y);
};

var bounds = [xy(0, 0), xy(1000, 824)];
var historyMod = 0


function renderGeneralMarker(marker){
  if(admin || !marker.history || parseInt(marker.history) <= parseInt(historyMod)) {
    var popup = L.popup({'closeButton':false}).setContent(marker.text)
    L.marker(xy(marker.x, marker.y), {icon: icons[marker.color]}).addTo(markers).bindPopup(popup)
  }
}

function renderMarkerGroups(){
  markers.clearLayers();

  if(danger){
    domainMarkers.map(function(marker){
      L.marker(xy(marker.x, marker.y), {icon: icons[marker.color]}).addTo(markers)
    })
  } else if(domain){
    domainMarkers.map(function(marker){
      var popup = L.popup({'closeButton':false}).setContent(marker.text).setLatLng(xy(marker.x, marker.y))
      L.marker(xy(marker.x, marker.y), {icon: icons[marker.color]}).addTo(markers).bindPopup(popup)
      map.addLayer(popup)
    })
  } else {
    //Only render if their history mod is high enough (if relevant)
    //qureaMarkers.map(function(marker){ renderGeneralMarker(marker) })

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
}
renderMarkerGroups()


//Add a legend
if(danger || domain){
  var legend = L.control({position: 'topright'});
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML =
      '<div><i style="background-color: #2FB02C"></i> Safe</div>'+
      '<div><i style="background-color: #CCC22C"></i> Risky</div>'+
      '<div><i style="background-color: #CA8428"></i> Dangerous</div>'+
      '<div><i style="background-color: #e24646"></i> Deadly</div>'+
      '<div><i style="background-color: #CCC"></i> Unknown</div>'
    return div;
  };
  legend.addTo(map);
}

//Render map
map.setView(xy(500, 412), 0);

//Define objects for all the image resolutions
var regionLabels = L.imageOverlay('/aidilon-map/img/Aidilon_grid_region-labels_4k.jpg', bounds);
var allLabels = L.imageOverlay('/aidilon-map/img/Aidilon_grid_4k.jpg', bounds);

if(labels){
  allLabels.addTo(map)
} else {
  regionLabels.addTo(map)
}


//Print x/y to console on click for debug/data editing purposes
map.on('click', function(e){
console.log(e.latlng.lng+' '+e.latlng.lat)
})
