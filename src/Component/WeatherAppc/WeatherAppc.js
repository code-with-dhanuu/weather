// import axi
import { useEffect, useState } from 'react'
import './WeatherAppc.css'
// import search from './search.png'
import axios from 'axios'
// import {WeatherCard} from '../Homecard/WeatherCard'
// import country from './country.png'
import cityimg from './city.png'
// import time from './time.png'
import tempr from './temp.png'
import cloud from './cloud.png'
import humidity from './humidity.png'
import direction from './direction.png'
// import cel from './cel.png'
import region from './region.png'
import speed from './speed.png'
import updated from './updated.png'
import current from './current.png'

export function WAcard() {
    const [city, setCity] = useState("Shrigonda")
    const [weather, setWeather] = useState()

    useEffect(
        () => {
            fetchdata()
        }, []
    )


    useEffect(
        () => {
            fetchdata()
        }, [city]
    )

    let temp;

    const fetchdata = async () => {

        try {
            const result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=866b8bdcde384602abd31807242506 &q=${city}&aqi=no`)

            setWeather(result.data)
            console.log(weather)
        }
        catch (error) {
            console.error("Their is error to fetch a api", error)
        }
    }

    {
        weather && (temp = weather.current.temp_c)
        console.log(temp)
    }


    if (temp < 15) {
        document.getElementById('img').classList.add(`bg-rainy`)
        document.getElementById('img').classList.remove(`bg-clear`)
        document.getElementById('img').classList.remove(`bg-sunny`)
        document.getElementById('img').classList.remove(`bg-cloudy`)
    }
    else if (temp < 20) {
        document.getElementById('img').classList.remove(`bg-rainy`)
        document.getElementById('img').classList.remove(`bg-clear`)
        document.getElementById('img').classList.remove(`bg-sunny`)
        document.getElementById('img').classList.add(`bg-cloudy`)

    }
    else if (temp > 30) {
        document.getElementById('img').classList.remove(`bg-rainy`)
        document.getElementById('img').classList.remove(`bg-clear`)
        document.getElementById('img').classList.add(`bg-sunny`)
        document.getElementById('img').classList.remove(`bg-cloudy`)
    }
    else if (temp > 40) {
        document.getElementById('img').classList.remove(`bg-rainy`)
        document.getElementById('img').classList.add(`bg-clear`)
        document.getElementById('img').classList.remove(`bg-sunny`)
        document.getElementById('img').classList.remove(`bg-cloudy`)
    }




    return (
        <>
            <div className='weather' id='img'>
                {/* <div className='searchbar'> */}
                {
                    weather && (
                        <div className='serchdiv'>
                            <input type='text' placeholder='Search' className='serinp' value={city}
                                onChange={(e) => {

                                    setCity(e.target.value)
                                }
                                } />
                            <div className='count'>
                                <div> <img src={cityimg} className='ccimg' /></div>
                                <div>
                                    <h2 className='cutemp'>{weather.current.temp_c}°C</h2><br />
                                    <h1 className='head'> {weather.location.name}</h1>
                                </div>

                            </div>



                            {/* <div className='icoon'>
                            <div>  <img src={weather.current.condition.icon} /></div><div><h3>{weather.current.condition.text}</h3></div>
                        </div> */}

                        </div>
                    )}


                {
                    weather && (
                        <div>



                            {/* time */}
                            {/* <div className='local'>
                        <p className='wtemp'>
                        <span className='headbold'>Current time: </span>{weather.location.localtime}<br></br>
                        <span className='headbold'>Last updated : </span>{weather.current.last_updated}</p>
                        </div> */}



                            {/* country name  */}




                            {/* weather cards  */}

                            <div className='detect'>

                                <div className='boxdiv'>
                                    <div className='mainweather'>
                                        <div className='cityc'>
                                            <p className='wtemp'><img src={region} className='wwimg' /><br />
                                                <span className='headbold'>Location <br /> </span>{weather.location.country} , {weather.location.region}</p>
                                        </div>
                                        {/* <div className='cityc'>
                        <p className='wtemp'><img src={cityimg} className='wwimg'/><br/>
                        <span className='headbold'>City <br/> </span>{weather.location.name}</p>
                        </div>
                        <div className='cityc'>
                        <p className='wtemp'><img src={cel} className='wwimg'/><br/>
                        <span  className='headbold'>Temperature  <br/></span>{weather.current.temp_c}°C</p>
                        </div> */}
                                        <div className='cityc'>
                                            <p className='wtemp'><img src={tempr} className='wwimg' /><br />
                                                <span className='headbold'>Farhairate <br /> </span>{weather.current.temp_f} F</p>
                                        </div>

                                        <div className='cityc'>
                                            <p className='wtemp'><img src={humidity} className='wwimg' /><br />
                                                <span className='headbold'>Humidity <br /> </span>{weather.current.humidity}</p>
                                        </div>


                                    </div>

                                    <div className='mainweather'>


                                        <div className='cityc'>
                                            <p className='wtemp'><img src={direction} className='wwimg' /><br />
                                                <span className='headbold'>Wind Direction  <br /> </span>{weather.current.wind_dir}</p>
                                        </div>

                                        <div className='cityc'>
                                            <p className='wtemp'><img src={speed} className='wwimg' /><br />
                                                <span className='headbold'>Wind Speed <br /> </span>{weather.current.wind_kph}</p>
                                        </div>

                                        <div className='cityc'>
                                            <p className='wtemp'><img src={cloud} className='wwimg' /><br />
                                                <span className='headbold'>Cloud  <br /> </span>{weather.current.cloud}</p>
                                        </div>
                                    </div>

                                </div>

                                {/* <div className='newb'> */}
                                <div className='wedata'>
                                    {/* weather icon  */}

                                    <h1 className='hhead'>{weather.current.condition.text}</h1>
                                    <img src={weather.current.condition.icon} height="120px" />
                                    {/* <div className='local'> */}
                                    <div className='wemp'>
                                        <p className='dii'><img src={current} className='ccimg' /><br /> <span className='bold'>Current time </span><br />{weather.location.localtime}<br></br></p>
                                        <p className='dii'><img src={updated} className='ccimg' /> <br /> <span className='bold'>Last updated  </span><br />{weather.current.last_updated}</p>
                                    </div>
                                    {/* </div> */}

                                </div>
                                {/* </div> */}

                            </div>


                        </div>
                    )
                }


                {/* </div> */}
            </div>


        </>
    )
}