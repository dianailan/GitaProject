var api_key = "at_EFC4qfwjC3Z3ua8XefoJmrwOGX0bC";
var inpVal;
var ipInput = $('#ipInput');
var regexp = /^[\.0-9]*$/;

function getIp(){
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: api_key, ipAddress: inpVal},
        success: function(data) {
            $("#ip").html(inpVal);
            $('#isp').html(data.isp);
            $('#location').html(data.location.city + ", "+ data.location.country);
            $('#timezone').html(data.location.timezone);
            ipInput.val('');
            map.panTo(new L.LatLng(data.location.lat, data.location.lng)); 
        }
    });
}
ipInput.on('keypress', function(event) {
    if(!regexp.test(event.target.value)){
        event.preventDefault();
    }
    if(event.key === 'Enter'){
        event.preventDefault();
        if(inpVal){
            $('.submit-btn').click();
        }else{
            $(".error-message").html('Please provide a valid IP Address');
        }
    }
});
function checkIpValidity(val){
    if(!val){
        $(".error-message").html('');
    }
    inpVal = val;
}
var map = L.map('map').setView([41.82458, 44.75361], 13);
L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: '../images/pin.png',

    iconSize:     [43, 43],
    iconAnchor:   [25, 25]
});

L.marker([41.82458, 44.75361], {icon: greenIcon}).addTo(map);
map.dragging.disable();
map.scrollWheelZoom.disable();






