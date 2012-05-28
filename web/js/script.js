function initMap() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayMyPosition, errorPosition);
} else {
  // Pas de support, proposer une alternative ?
}
}

function displayMyPosition(position) {
    displayMap(position.coords.longitude,position.coords.latitude);
}

function errorPosition(error) {
    switch(error.code) {
    case error.TIMEOUT:
    	alert("Timeout !");
    break;
    case error.PERMISSION_DENIED:
        alert("Vous n’avez pas donné la permission pour vous localiser");
    break;
    case error.POSITION_UNAVAILABLE:
    	alert("La position n’a pu être déterminée");
    break;
    case error.UNKNOWN_ERROR:
    	alert("Erreur inconnue");
    break;
    }
}

function displayMap(lon,lat) {
    var map, layer;     
      map = new OpenLayers.Map('basicMap', { controls: [new OpenLayers.Control.MouseDefaults()]});
     map.addLayer(new OpenLayers.Layer.OSM());
 
    var lonLat = new OpenLayers.LonLat( lon ,lat )
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
 
    var zoom=16;
 
    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    var marker = new OpenLayers.Marker(lonLat);
    markers.addMarker(marker);
    var ol_wms = new OpenLayers.Layer.WMS( "OpenLayers WMS",
                                             "http://labs.metacarta.com/wms/vmap0?", {layers: 'basic'});
    var feature = new OpenLayers.Feature(markers, lonLat);
 
    map.setCenter (lonLat, zoom);
     marker.events.register("mousedown", marker, mousedown);
    //Gestion des evenements
     function mousedown(evt) {
       popup = feature.createPopup(true);
          popup.setContentHTML("Exemple de PopUp sur un marqueur");
            popup.setBackgroundColor("yellow");
          popup.setOpacity(0.6);
       markers.map.addPopup(popup);
     }
   }