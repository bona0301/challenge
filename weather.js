const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child")
const API_KEY = '83ccc3e964a963ce1083e324818e68d6';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main},${data.main.temp}`;
    });
}
function onGeoError(){
    alert("위치를 찾을 수 없습니다")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)