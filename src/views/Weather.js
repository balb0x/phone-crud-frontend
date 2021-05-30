import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';


const Forecast = () => {
    //Get the openweather api key from the environment
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    /*
    Define the widget properties. The widget is currently pointing to
    Madrid's coordinates, to change widget location, just change the coordinates
    to the desired ones.
     */
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
            locationLabel="Madrid" // Hardcoded location label
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
        />
    )
}
export default Forecast;