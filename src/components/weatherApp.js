import { useEffect, useState } from "react"
import WheaterForm from '../components/weatherForm';
import WeatherMainInfo from "../components/weatherMainInfo";
import Loading from "./loading";
import styles from './weatherApp.module.css';

export default function WheatherApp() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        loadInfo()
    }, []);
    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}`
    }, [weather]);

    async function loadInfo(city = 'london') {
        try {
            const req = await fetch(`http://api.weatherapi.com/v1/current.json?&key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`)
            const data = await req.json()
            setTimeout(() => {
                setWeather(data)
            }, 1000);
        } catch (error) {

        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city)
    }

    return (
        <div className={styles.weatherContainer}>
            <WheaterForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading/>}
            
        </div>
    );
}