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
        map = new OpenLayers.Map("basicMap");
        var mapnik         = new OpenLayers.Layer.OSM();
        var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
        var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
        var position       = new OpenLayers.LonLat(lon,lat).transform( fromProjection, toProjection);
        var zoom           = 15; 
 
        map.addLayer(mapnik);
        map.setCenter(position, zoom );
      }