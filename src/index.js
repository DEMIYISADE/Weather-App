        let weather = {
                paris: {
                    temp: 19.7,
                    humidity: 80
                },
                tokyo: {
                    temp: 17.3,
                    humidity: 50
                },
                lisbon: {
                    temp: 30.2,
                    humidity: 20
                },
                "san francisco": {
                    temp: 20.9,
                    humidity: 100
                },
                oslo: {
                    temp: -5,
                    humidity: 20
                }
            };

            // write your code here

            weather.paris.farenheight = "67℉";
            weather.tokyo.farenheight = "69℉";
            weather.lisbon.farenheight = "57℉";
            weather["san francisco"].farenheight = "58℉";
            weather.oslo.farenheight = "62℉";

            console.log(weather);

            function showValue() {
                let responseCity = prompt("Enter a City?");
                responseCity = responseCity.trim();
                responseCity = responseCity.toLowerCase();
                if (weather[responseCity] !== undefined) {
                    alert("It is currently " + (weather[responseCity].temp) + "℃" + " (" + (weather[responseCity].farenheight) + ")" + " in " + (responseCity) + " with a humidity of " + (weather[responseCity].humidity));
                    } else {
                        alert("Sorry, we don't know the weater for this city, try going to https://www.google.com/search?q=weather+" + responseCity);
                        }
                        }
                        //weather.forEach(showValue);
                        showValue();