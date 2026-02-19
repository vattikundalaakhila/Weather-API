const search_btn = document.getElementById("search_btn");
const temp_data =document.getElementById("temp_data");
const wind_data = document.getElementById("wind_data");
const humidity_data = document.getElementById("humidity_data");
const input_data = document.querySelector("input");
const city_data = document.getElementById("city_data");

//when the search button is clicked 
search_btn.addEventListener("click", (e)=>{
    e.preventDefault();

    if(input_data.value===""){
        alert("please enter valid city name");
    }
    const city = input_data.value;
    getWeatherData(city);
})
input_data.addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
        getWeatherData(input_data.value);
    }

});

 async function getWeatherData(city){

    const apiKey = "fd2d636a129207770117900087d6afc3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch(url);
        const data = await response.json()


        temp_data.textContent = data.main.temp+ " \u00B0C";
        wind_data.textContent = data.wind.speed + " m/s";
        humidity_data.textContent = data.main.humidity + "%";
        city_data.textContent =     data.name;
    }
    catch(error){
        alert("city not found");

    }

}


