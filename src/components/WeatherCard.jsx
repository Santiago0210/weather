import {useState} from "react"

const WeatherCard = ({weather, temp}) => {
  const [isCelsius, setIsCelsius] = useState(true)
  const handleChangeTemp = () => setIsCelsius(!isCelsius)

  
  return (
    
    
  <article className='principal'>
    <div className="first">
      <div className='second'>
        <h1>Weather App</h1>
        <h2>{weather?.name}, {weather?.sys.country}</h2>
       </div>
        <div>
          <div className="image">
            <div className='third'>
              <img className="img"
               src={weather &&`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` }
              alt=""/>

            </div>
            <div>
              <div>
              <h3>"{weather?.weather[0].description}"</h3>

              </div>
              
              <ul>
                <li><span>Wind Speed</span><span>{weather?.wind.speed}: m/s</span></li>
                <li><span>Clouds</span><span>{weather?.clouds.all}: %</span></li>
                <li><span>Pressure</span><span>{weather?.main.pressure}: hPa</span></li>

              </ul>
            </div>
         </div>
           <h2>{isCelsius ? `${temp?.celsius} ºC`: `${temp?.farenheit} ºF`}</h2>
           <button onClick={handleChangeTemp}>{isCelsius ?'Change to ºF': 'Change to ºC'}</button>
      </div>
     </div>
  </article>
    
  
  
  )
}

export default WeatherCard