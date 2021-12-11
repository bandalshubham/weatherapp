import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () =>{
    const[city,setCity] = useState(null);
    const [search,setSearch] = useState("");
     useEffect(()=>{

        const fetchApi = async() =>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=65b6ddafc1399a8567a361b6f1444907`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

        }
        fetchApi();
     },[search])
    return (
        <>
    
        <div className="box">
            <div className="inputData">
                <input type="search" className="inputField" onChange={(event)=>{setSearch(event.target.value)}}/>

            </div>
            {!city?(<p className="errorMsg">NO data found</p>):(
                <div>
                
            <div className="info">
                <h2 className="location"><i class="fas fa-street-view"></i> {search} </h2>
                <h1 className="temp">
                    {city.temp} cel</h1>
                <h3 className="tempmin_max">Min:{city.temp_min}cel | Max:{city.temp_max}cel</h3>


            </div>
            <div className="wave_one"></div>
            <div className="wave_two"></div>
            <div className="wave_three"></div>
              </div>
            )}


             </div>
          
  
    </>
    )}


export default Tempapp;
