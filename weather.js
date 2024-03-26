import React ,{useState} from "react";
import Axios from "axios";
const KEY="519b8418db022ac572e5e89b5319e9fb";
const Weather =() =>{
    const[city,setCity]=useState("");
    const[data,setData]=useState();
 const fetchData=async()=>{
    try{
        const response=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
        setData(response.data);
    }
    catch(err){
        alert("please enter a city name correctly..");
    }
 }

return (
    
    <div className="App">
    <h1 className="title">React-Weather App</h1>
    <div className="input-container">
    <input type="text" className="input" placeholder="Enter the city" value={city} onChange={e=>setCity(e.target.value)}></input>
   <button className="button" onClick={fetchData}>Fetch</button>
   </div>
    <div>
        {data && (<div className="container">
           <h1 className="city-name">{data.name},{data.sys.country}</h1> 
           <div className="weather-info">
            <div className="temp">{Math.round(data.main.temp)}C</div>
            <div className="coordination">
            <div>Latitude: {data.coord.lat}</div>
            <div>Longitude: {data.coord.lon}</div>
            </div>
        </div>
        </div>
        )}
</div>
</div>
)
}
export default Weather;