let mapOptions = {
    center:[4.61664, -74.06782],
    zoom:10
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

// let marker = new L.Marker([4.6535, -74.0833]);
// marker.addTo(map);

let marker = L.marker([4.61664, -74.06782]).addTo(map)


// let iconMarker = L.icon({
//     iconUrl:'iconcarro.jpg',
//     iconSize: [60, 60],
//     iconAnchor:[30,60]
// })

let marker2 = L.marker([4.6166, -74.0678]).addto(map)

map.on('dblclick', e =>{
    let latLng = map.mouseEveNtToLatLng(e.originalEvent)
    console.log (latLng)
})

// ---------------------------  Traer datos  ----------------------------


var userName = "servWebElite";
var passWord = "$s3rvW3bEl1t3%";

function authenticateUser(user, password)

{
    var auth = user + ":" + password;
    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    var hash = btoa(auth); 

    return "Basic " + hash;
}

function CallWebAPI() {

    // New XMLHTTPRequest
    var request = new XMLHttpRequest();
	var autenticate = authenticateUser(userName, passWord);
	alert("Encode pasword:"+autenticate);
    request.open("get", "https://gps.coltrack.com/gps/api.jsp", false);	
    request.setRequestHeader("Authorization", authenticateUser(userName, passWord));  	
    request.send();

    // view request status
    // alert(request.status);
    response.innerHTML = request.responseText;
}

