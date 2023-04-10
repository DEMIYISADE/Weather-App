
    
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
        let cityUpdate = document.querySelector("#city-selection");
        let cityChange = document.querySelector("#city-onpage")
        console.log(cityUpdate.value);
        cityChange.innerHTML = cityUpdate.value;
    }
      
    let buttonUpdate = document.querySelector("#search-form")
    buttonUpdate.addEventListener("submit", update);


    function changeNow(event){
        event.preventDefault();
        let nUpdate = document.querySelector("#number-update");
        let identify1 = nUpdate.innerHTML;
        nUpdate.innerHTML = Math.random((identify1 - 32) * 5 / 9);   

    }

    function changeNow1(event){
        event.preventDefault();
        let nUpdate = document.querySelector("#number-update");
        let identify = nUpdate.innerHTML;
        nUpdate.innerHTML = Math.round((identify * 9 / 5) + 32);

        
    }

    let cUpdate = document.querySelector("#degree-update");
    let fUpdate = document.querySelector("#farenheit-update");

    cUpdate.addEventListener("click", changeNow);
    fUpdate.addEventListener("click", changeNow1);


