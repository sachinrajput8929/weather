import "./App.css";
import Search from "./components/Search";
import Result from "./components/Result";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const[history, setHistory] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  }
 

  const searchWeatherHandler = ()=>{
  
    if(search !==""){
      axios
      .get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=302b09014890b7726e989dee340f6be7&units=metric`
         `http://api.weatherapi.com/v1/forecast.json?key=51b357011b0842d6ac161904240905&q=${search}&days=7&aqi=yes&alerts=yes`
      )
      .then((response) => {
    
          //repeted data not store in history
        if(history.indexOf(search) === -1){
          setHistory(
            [
              ...history,
              search
            ]
          )
        }

        console.log(response.data.current.condition.icon);
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    }

  }

  return (
    <>
      <div className=" block  p-10  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler} />
      <Result weatherData={weather}  historyData= {history}/>
      </div>
    </>
  );
}

export default App;
