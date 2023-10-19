// api ="http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
// key ="ac3d4a98b1b3ce2468460b0ab799a293"
// json= javascript object notation

async function getLatLong() {
  try {
    let cityName = document.getElementById("city_name").value;
    let response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=ac3d4a98b1b3ce2468460b0ab799a293`
    );
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}


function getWeather(data){

  

}

let weatherBtn = document.getElementById("weather_btn");
weatherBtn.addEventListener("click", () => {
  getLatLong();
});


// async function getLatLong(){
//   try {
//     let city_name =document.getElementById('city_name').value
//     let operate =await fetch
//     (`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit={limit}&appid={API key}`)
//     let data=await operate.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// getLatLong()
