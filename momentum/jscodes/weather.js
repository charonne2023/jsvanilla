const API_KEY = "6bb21cc5eee42d57f4f07f1f37ccf947";



function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` 
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather-box span:first-child");
            const city = document.querySelector("#weather-box span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
            city.innerText = `You are 📍 ${data.name}`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you");
}
 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
 