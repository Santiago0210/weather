import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import getRandomElemArray from './components/getRandomElemArray'

function App() {
  const numberRandom = getRandomElemArray([1, 2, 3, 4])
  const [coords, setCoords] = useState()
  const [weather, setweather] = useState()
  const [temp, settemp] = useState()
  const [numberBg, setnumberBg] = useState(numberRandom)
  useEffect(() => {
  const success = pos => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(obj)
  }
  navigator.geolocation.getCurrentPosition(success)
}, [])
useEffect(() => {
 if (coords){
  const ApiKey= '61c2b642c93b04acc858680feacc3242'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`
  axios.get(url)
  .then(res =>{setweather(res.data)
     const obj = {
      celsius: (res.data.main.temp -273.15).toFixed(1),
      farenheit: ((res.data.main.temp -273.15) *9/5 + 32).toFixed(1)
     }
     settemp(obj)
    })
  .catch(err => console.log(err))
 }
}, [coords])

const bgStyle = {
  backgroundImage: `url(/fondo${numberBg}.jpg)`
}

  return (
    <div className='container' style={bgStyle}>
      
      <WeatherCard 
      weather={weather}
      temp={temp}
      />
    </div>
  )
}

export default App
