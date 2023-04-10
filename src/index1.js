   
          function correctMinute(){
            let minute = now.getUTCMinutes();
            if (minute < 10){
                return minute = ("0" + minute);
            } else {
                return minute;
            }
        }
    
    let now = new Date();
    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[(now.getDay())];
    let hour = now.getHours();
    let minute = now.getMinutes();


    let time = document.querySelector("#getCurrentTime");
    time.innerHTML = day + " " + hour + ":" + correctMinute();


    //2-3
    function search (city) {
        let apiKey = "5354b6032396";
        let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(weatherApi).then(displayWeatherDetails);
    }
    
    //2-2
    function handleSubmit(event){
        event.preventDefault();
        let city = document.querySelector("#city-selection").value;
        integrationForcast(city);
        search (city);
    }
    
    //1-4,   2-4
    function displayWeatherDetails(response) {
        document.querySelector("#city-onpage").innerHTML = response.data.name;
        celsiusTemperature = response.data.main.temp;
        document.querySelector("#number-update").innerHTML = Math.round(celsiusTemperature);
        document.querySelector("#weatherDescription").innerHTML = response.data.weather[0].description;
        document.querySelector("#updateHumidity").innerHTML = response.data.main.humidity;
        document.querySelector("#updateWind").innerHTML = response.data.wind.speed;
        document.querySelector("#icon").setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
        document.querySelector("#icon").setAttribute("alt", response.data.weather[0].description);
      }

      //1-3
      function showPosition(position){
        let apiKey = "5354b32396";
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let locationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
        axios.get(locationUrl).then(displayWeatherDetails);
      }

      //function displaynewCity(find){
      //  let newcity = find.data.name;
       // let newcityChange = document.querySelector("#city-onpage")
       // newcityChange.innerHTML = newcity;
  //    }


      //1-2
      function elocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(showPosition);
        //debugger;
      }
    
    //2-1
    let buttonUpdate = document.querySelector("#search-form")
    buttonUpdate.addEventListener("submit", handleSubmit);


    //1-1
    let currentbuttonUpdate = document.querySelector("#current-click");
    currentbuttonUpdate.addEventListener("click", elocation);

      //3-2(a)
    function celsiusConversion(event){
        event.preventDefault();
        let nUpdate = document.querySelector("#number-update")
        cUpdate.classList.remove("active");
        fUpdate.classList.add("active");      
        let farenheitTemperature = (celsiusTemperature * 9/5) + 32;
        nUpdate.innerHTML = Math.round(farenheitTemperature);
    }

    //3-2(b)
    function farenheitConversion(event){
        event.preventDefault();
        let nUpdate = document.querySelector("#number-update");
        fUpdate.classList.remove("active");       
        cUpdate.classList.add("active");
        nUpdate.innerHTML = Math.round(celsiusTemperature);        
    }

    //3-1
    let cUpdate = document.querySelector("#celsius-update");
    let fUpdate = document.querySelector("#farenheit-update");
    cUpdate.addEventListener("click", farenheitConversion);
    fUpdate.addEventListener("click", celsiusConversion);

    //**Important calls */
    celsiusTemperature = null;


    //**Important calls */
    search("New York");


    // NOTE TO SELF ---- The original code I initially wrote is in originalIndex1.js
    //The changes are made was to made New York the default city on reload of the page. See below the changes.
    // Outside all the functions, I put a line of code calling/invoking a function search 
    //for which in this function I supplied an augument "New York"

    // The function the goes to check the fuction details above to perform the actions by inputting the augument "New York"

    // I created this new function above called search and moved my weather API key, weather API url and the line of code calling the API with axios 
    // The calling of the API through axios line of code inadvertently invoked the function to get the temperature, humity and wind speed.

    // Therefore at the reloading of the page, New York becomes the defauls city.
    // However, I also went to my html code to remove the default city I hard coded.

    
    function integrationForcast(city){
      //search(lisbon);
      let apiKey = "bc6a5";
      let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri"];
      let cnt = 6;
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=${cnt}&appid=${apiKey}`;
      console.log(apiUrl);
      //axios.get(apiUrl).then(forecastedTemperature);
    }

    integrationForcast();

    /*function forecastedTemperature() {

    }*/


