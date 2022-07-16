
const api_key = `pk.e68ec96fe8a21b173e35975725d01633`;
var postcode;
var state;
var state_district;
const locationButton = document.getElementById("location-button");
const findLocation = () => {
    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const url = `https://us1.locationiq.com/v1/reverse?key=${api_key}&lat=${latitude}&lon=${longitude}&format=json`
        fetch(url)
            .then(res => res.json())
            .then(data =>{ 
                postcode=data.address.postcode;
                state = data.address.state;
                state_district= data.address.state_district;
                let str=state_district+","+state+","+postcode;
                locationButton.innerText = str;
    })
    }
    const error = () => {
        locationButton.innerText= 'unable to get your location'
    }
    navigator.geolocation.getCurrentPosition(success, error);
}
locationButton.addEventListener('click', findLocation);
