var api_key = "at_EFC4qfwjC3Z3ua8XefoJmrwOGX0bC";
var inpVal;
function getIp(){

    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: api_key, ipAddress: inpVal},
        success: function(data) {
            console.log(data)
            $("#ip").html(inpVal);
            $('#isp').html(data.isp);
            $('#location').html(data.location.city + ", "+ data.location.country);
            $('#timezone').html(data.location.timezone);
            map.panTo(new L.LatLng(data.location.lat, data.location.lng)); 
        }
    });
}
function checkIpValidity(val){
    inpVal = val;
}
var map = L.map('map').setView([41.7151, 44.9], 13);
L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: './images/pin.png',

    iconSize:     [43, 43],
    iconAnchor:   [25, 25]
});

L.marker([41.7151, 44.9], {icon: greenIcon}).addTo(map);
map.dragging.disable();
map.scrollWheelZoom.disable();






