
    
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
    let day = days[(now.getUTCDay())];
    let hour = now.getUTCHours();
    let minute = now.getUTCMinutes();


    let time = document.querySelector("#getCurrentTime");
    time.innerHTML = day + " " + hour + ":" + correctMinute();

    function update(event){
        event.preventDefault();
        let apiKey = "5354b60afda2b7800186c06153932396";
        let cityUpdate = document.querySelector("#city-selection");
        let city = cityUpdate.value;
        console.log(cityUpdate.value);
        let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(weatherApi).then(displayTemperature);
    }
    
    function displayTemperature(response) {
        let temp = Math.round(response.data.main.temp);
        let atmosphere = response.data.weather[0].description;
        let humidityValue = response.data.main.humidity;
        let windValue = response.data.wind.speed;
        
        let cityChange = document.querySelector("#city-onpage")
        cityChange.innerHTML = response.data.name;

        let updateTemp = document.querySelector("#number-update");
        updateTemp.innerHTML = `${temp}℃`;
        let changeDescription = document.querySelector("#weatherDescription");
        changeDescription.innerHTML = atmosphere;
        let changeHumidity = document.querySelector("#updateHumidity");
        changeHumidity.innerHTML = `${humidityValue}%`;
        let changeWind = document.querySelector("#updateWind");
        changeWind.innerHTML = `${windValue}km/h`;
        console.log(changeDescription);
        console.log(temp);
      }

 //     function showPosition(position){
       // let lat = position.coords.latitude;
       // let long = position.coords.longitude;
       // let locationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
       // axios.get(locationUrl).then(displaynewCity);
      //}

      //function displaynewCity(find){
      //  let newcity = find.data.name;
       // let newcityChange = document.querySelector("#city-onpage")
       // newcityChange.innerHTML = newcity;
  //    }


      //function location(){
      //  navigator.geolocation.getCurrentPosition(showPosition);
     // }
      
    let buttonUpdate = document.querySelector("#search-form")
    buttonUpdate.addEventListener("submit", update);

    //let currentbuttonUpdate = document.querySelector("#current-click");
    //currentbuttonUpdate.addEventListener("click", location);


    function changeNow(event){
        event.preventDefault();
        let nUpdate = document.querySelector("#number-update");
        nUpdate.innerHTML = 34;   

    }

    function changeNow1(event){
        event.preventDefault();
        let nUpdate = document.querySelector("#number-update");
        nUpdate.innerHTML = 93;

        
    }

    let cUpdate = document.querySelector("#degree-update");
    let fUpdate = document.querySelector("#farenheit-update");

    cUpdate.addEventListener("click", changeNow);
    fUpdate.addEventListener("click", changeNow1);


