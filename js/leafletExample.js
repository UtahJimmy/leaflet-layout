
/////////////////////////////////////
//
//            VARIABLES
//
/////////////////////////////////////

var startZoom = 11;
var maxZoom = startZoom;
var minZoom = startZoom;
var slcLocation = [40.710,-111.870];

var mapSettings = {
    zoomControl:false
}

//set map view location and zoom level
var myMap = L.map('mapid',mapSettings).setView(slcLocation,startZoom);


/////////////////////////////////////
//
//            STATEMENTS
//
/////////////////////////////////////

// Add tile layer to map -- MapBox Streets tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: maxZoom,
    minZoom: minZoom,
    id: 'mapbox.streets',
    accessToken:'pk.eyJ1IjoiamFtb29yZTg0IiwiYSI6ImNqbm0zeWo5ZTAwcDIzcXM4NjJ4czBuODUifQ.cJSLiKVi7lbGzE4RQTRNHA'
}).addTo(myMap);





/////////////////////////////////////
//
//            FUNCTIONS
//
/////////////////////////////////////
