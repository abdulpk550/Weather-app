const inputBox = document.querySelector(".input-box");
const btn = document.querySelector(".btn");
const imgIcon = document.querySelector(".img-icon")
const warning = document.querySelector(".warning");
const error = document.querySelector(".correct");


const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "78bca77a631d1f1efe9ed67e91eba3c3";

async function weather(city) {
    let response = await fetch(api + city + `&appid=${apiKey}`);
    let data = await response.json();
    // console.log(data);


    if (inputBox.value == "") {
        warning.style.display = "block";

    }
    else if (response.status == 404) {
        error.style.display = "block";
    }
    else {

        document.querySelector(".City").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".feel").innerHTML = "Feels like " + Math.round(data.main.feels_like) + "°c";


        document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clear") {
            imgIcon.src = "assets/clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            imgIcon.src = "assets/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            imgIcon.src = "assets/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            imgIcon.src = "assets/snow.png";
        }
        else if (data.weather[0].main == "Partly sunny") {
            imgIcon.src = "assets/cloudy.png";
        }
        else if (data.weather[0].main == "Smoke") {
            imgIcon.src = "assets/Smoke.png";
        }
        else if (data.weather[0].main == "Haze") {
            imgIcon.src = "assets/haze.png";
        }

    }
    inputBox.value = "";



}



btn.addEventListener("click", () => {
    weather(inputBox.value);
    warning.style.display = "none";
    error.style.display = "none";
})