window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=05b7748ec748af2b1a412a0ec84a8f90`

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
        });


    }
    else{
        h1.textContent = "You need to turn on the Geolocation."
    }
});