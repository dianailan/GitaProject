var weatherApiKey = 'daf97bcc8eb8cabc237e4ca9e7ca80f4';
var city = 'tbilisi';
var cityInput = $('#cityInput');

$(document).ready(function() {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        data: {appid: weatherApiKey, q: 'tbilisi', units: 'metric'},
        success: function(data) {
            var iconcode = data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
            $("#wicon").attr('src', iconurl);
            $(".degree").html(Math.round(data.main.temp) + "°");
            $(".city").html(data.name + ", " + data.sys.country);
            $('.weather-description').html(data.weather[0].description);
            $(".low-high").html(Math.round(data.main.temp_min) + "° /" + Math.round(data.main.temp_max) + "°");
            $(".feels-like").html(Math.round(data.main.feels_like) + "°");
            $(".humidity").html(data.main.humidity + "%");
        }
    });
});

function inputValue(val){
    if(!val){
        $(".error-message").html('');
    }
    city = val;
}

cityInput.on('keypress', function(event) {
    if(event.key === 'Enter'){
        event.preventDefault();
        cityInput.val('')
        if(city){
            $('.submit-btn').click();
        }else{
            $(".error-message").html('Please provide a city name');
        }
    }
});

function getCityWeather(){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        data: {appid: weatherApiKey, q: city, units: 'metric'},
        success: function(data) {
            var iconcode = data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
            $("#wicon").attr('src', iconurl);
            $(".degree").html(Math.round(data.main.temp) + "°");
            $(".city").html(data.name + ", " + data.sys.country);
            $(".error-message").html('');
            $('.weather-description').html(data.weather[0].description);
            $(".low-high").html(Math.round(data.main.temp_min) + "° /" + Math.round(data.main.temp_max) + "°");
            $(".feels-like").html(Math.round(data.main.feels_like) + "°");
            $(".humidity").html(data.main.humidity + "%");
            cityInput.val('');
        }, error: function(error){
            $(".error-message").html('No city was found :(');
        }
    });
}
