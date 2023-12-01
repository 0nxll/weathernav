let weather = {
    apiKey: "25405327872c3426fdecd0cde9534d11",

    weatherFetchTest: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apiKey).then((response) => response.json()).then((data) => this.weatherMonitor(data));
    },

    weatherMonitor : function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".cityWeather").innerText = name;
        document.querySelector(".tempWeather").innerText = temp + "°";
        document.querySelector(".imgWeather").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".descWeather").innerText = description;
        document.querySelector(".humiWeather").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".windWeather").innerText = "Wind Speed: " + speed + "km/h";
        

        document.querySelector(".card").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        
        document.querySelector(".card").classList.remove("loadingScreen");
        





        
    },

    search: function() {
        this.weatherFetchTest(document.querySelector(".barSearch").value);
    }
};




document.querySelector(".buttonSearch").addEventListener("click", function() {
    weather.search();    
    document.querySelector(".barSearch").value = "";
})

document.querySelector(".barSearch").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
        document.querySelector(".barSearch").value = "";
    }
})


weather.weatherFetchTest("Puerto Princesa City");
