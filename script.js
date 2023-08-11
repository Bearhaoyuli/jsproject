import { getClothingRecommendation } from './recommendation.js';

document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    fetchWeather();
});

let isCelsius = true;

function toggleTemperature() {
    isCelsius = !isCelsius;
    document.getElementById('toggle-temp').innerText = isCelsius ? "Switch to °F" : "Switch to °C";
    fetchWeather(); 
}
window.toggleTemperature = toggleTemperature;


function fetchWeather() {
    const apiKey = 'a9776604113a41fda41211926230408';
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const clothingRecommendation = document.getElementById('clothing-recommendation');



            if (data.current && data.location) {
                const weatherDescription = data.current.condition.text;
                let temperature = isCelsius ? data.current.temp_c : (data.current.temp_c * 9/5) + 32;
                const humidity = data.current.humidity;

                console.log('Temperature in Celsius:', data.current.temp_c);
                console.log('Converted Temperature:', temperature);
                console.log('isCelsius:', isCelsius);

                const weatherHtml = `
                    <p><strong>City:</strong> ${data.location.name}</p>
                    <p><strong>Weather Description:</strong> ${weatherDescription}</p>
                    <p><strong>Temperature:</strong> ${temperature}°${isCelsius ? 'C' : 'F'}</p>
                    <p><strong>Humidity:</strong> ${humidity}%</p>
                `;

                const clothingHtml = getClothingRecommendation(temperature, humidity, weatherDescription,isCelsius);

                weatherInfo.innerHTML = weatherHtml;
                clothingRecommendation.innerHTML = clothingHtml;
            } else {
                weatherInfo.innerHTML = "<p>Could not fetch weather data.</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
console.log(isCelsius)

