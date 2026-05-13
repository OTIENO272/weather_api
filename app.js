// OpenWeather API Key
const API_KEY = '6f388833eaa3d4d3e6f5e77685e9dfba';

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax =document.getElementById("tempMax")
const tempMin =document.getElementById("tempMin")

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let dateObj = new Date();

date.innerHTML = `
${months[dateObj.getMonth()]} 
${dateObj.getDate()}, 
${dateObj.getFullYear()}
`;

const getWeather = async () => {

    try {
        const county =document.getElementById('searchBarInput').value;
        const weatherFetch = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${county}&appid=${API_KEY}&units=metric`
        );

        const weatherData = await weatherFetch.json();

        console.log(weatherData);

        // City
        city.innerHTML = weatherData.name;

        // Temperature
        temp.innerHTML = `${Math.round(weatherData.main.temp)}°C`;

        // Description
        description.innerHTML = weatherData.weather[0].description;

        // Weather Icon
        tempImg.innerHTML = `
            <img 
                src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"
                alt="weather icon"
            >
        `;
        tempMax.innerHTML=`${weatherData.main.temp_max}°C`
        tempMin.innerHTML=`${weatherData.main.temp_min}°C`

    } catch (error) {

        console.log(error);

    }

}

