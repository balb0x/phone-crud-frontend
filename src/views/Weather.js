import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';


const Forecast = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'ea89fc8424cc386f608a928d67911a32',
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