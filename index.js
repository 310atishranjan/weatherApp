console.log("hii");
let city;
let btn=document.getElementById('btn').addEventListener('click',(e)=>{
    city=document.querySelector('input').value;
    console.log(city);
    showWeather();
})
async function showWeather(){


let API_KEY="d1845658f92b31c64bd94f06f7188c9c"
const  response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

const data=await response.json();
console.log("weather data:->",data);

// let newpara=document.createElement('p');
// newpara.textContent=`${data?.main?.temp.toFixed(2)} "c`
// document.body.appendChild(newpara);
let newpara=document.getElementById('ans');
newpara.textContent=`${city} ${data?.main?.temp.toFixed(2)} "c`

}
// showWeather();