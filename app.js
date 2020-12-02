window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temparature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}http://api.weatherapi.com/v1/current.json?key=34c3620d49284b048ec183709200212&q=${lat},${long}`

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temp_f}= data.current;

                //Set DOM elements from the API
                temperatureDegree.textContent = temp_f;
            })
        });


    }
    else{
        h1.textContent = "You need to turn on the Geolocation."
    }
});