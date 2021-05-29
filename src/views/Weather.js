import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';


const Forecast = () => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: API_KEY,
        lat: '40.4167',
        lon: '-3.70325',
        lang: 'en',
        unit: 'metric',
    });

    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Madrid"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
        />
    )
}
export default Forecast;