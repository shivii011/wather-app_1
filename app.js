window.addEventListener("load" , ()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;
        console.log(long , lat)
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={6b7647225e796d5074670d07ebdfebea
    }`
    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

        fetch(api)
        .then(response=>{
            return response.json();
        })
        .then(data => {
            console.log(data);
        } )
        });
        

        }

    })