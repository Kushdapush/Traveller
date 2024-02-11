import { useState } from "react";
import axios from "axios";
import { fetchWeatherApi } from 'openmeteo';

const Stats = () => {
    const [place, setPlace] = useState("");
    const [date, setDate] = useState("");
    const geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q=";
    const apiKey = "d47525187eaa7c93ec357fdc916483fd";

    const fetchStats = async (latitude, longitude) => {
        try {
            const url = "http://api.weatherapi.com/v1/current.json";
            const key = "fa95dfb4b4a8433b9b5145434241002";
            const q = {
                "latitude": latitude,
                "longitude": longitude,
                "hourly": "temperature_2m"
            };

            const response = await fetchWeatherApi(url, q);
            console.log(response[0].hourly);

        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };


    const fetchLoc = async () => {
        try {
            if (place.trim() !== "") {
                const response = await axios.get(`${geoUrl}${place}&limit=5&appid=${apiKey}`);
                if (response.data && response.data.length > 0) {
                    const { lat, lon } = response.data[0];
                    console.log("Latitude:", lat);
                    console.log("Longitude:", lon);
                    console.log("Date:", date);
                    fetchStats(lat, lon);
                }
            }
        } catch (error) {
            console.error("Error fetching location data:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Enter the name of the place...."
            />
            <input
                type="date"
                value={date}
                onChange={(e) => {
                    const selectedDate = e.target.value;
                    Math.floor(new Date(selectedDate).getTime() / 1000);
                    setDate(selectedDate);
                }}
            />

            <button onClick={fetchLoc}>Go</button>
        </div>
    );
};

export default Stats;
