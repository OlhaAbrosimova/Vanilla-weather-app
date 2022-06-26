function displayTemperature(response) {
	let temperatureElement = document.querySelector("#base-temperature");
	temperatureElement.innerHTML = Math.round(response.data.main.temp);
	let cityElement = document.querySelector("#city");
	cityElement.innerHTML = response.data.name;
	let descriptionElement = document.querySelector("#description");
	descriptionElement.innerHTML = response.data.weather[0].description;
	let humidityElement = document.querySelector("#humidity");
	humidityElement.innerHTML = response.data.main.humidity;
	let windElement = document.querySelector("#wind-speed");
	windElement.innerHTML = response.data.wind.speed.toFixed(1);

	// let day = [
	// 	"Sunday",
	// 	"Monday",
	// 	"Tuesday",
	// 	"Wednesday",
	// 	"Thursday",
	// 	"Friday",
	// 	"Saturday",
	// ];
}

let apiKey = "a2e58143d5353df7726302c2856b0fb6";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
