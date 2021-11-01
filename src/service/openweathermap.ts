// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import axios from 'axios';

const api_openWeatherMap = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
        lang: 'pt_br',
        units: 'metric',
        appid: process.env.REACT_APP_API_OPENWAETHERMAP,
    },
});

export default class OpenWeatherMap {
    public static async GetCity(city: string) {
        const options = {
            params: {
                q: city,
            },
        };
        return new Promise((resolve, reject) => {
            api_openWeatherMap
                .request(options)
                .then(({ data }) =>
                    resolve({
                        status: {
                            dt: data.dt,
                            cod: data.cod,
                            message: '',
                        },
                        location: {
                            id: data.id,
                            name: data.name,
                            country: data.sys.country,
                            coord_lon: data.coord.lon,
                            coord_lat: data.coord.lat,
                            timezone: data.timezone,
                            temp: Math.floor(data.main.temp),
                        },
                        astro: {
                            sunrise: data.sys.sunrise,
                            sunset: data.sys.sunset,
                        },
                        element: {
                            feels_like: Math.floor(data.main.feels_like),
                            temp_min: Math.floor(data.main.temp_min),
                            temp_max: Math.floor(data.main.temp_max),
                            pressure: data.main.pressure,
                            humidity: data.main.humidity,
                            wind_speed: data.wind.speed,
                            wind_deg: data.wind.deg,
                            clouds: data.clouds.all,
                        },
                        condition: {
                            id: data.weather[0].id,
                            name: data.weather[0].main,
                            description: data.weather[0].description,
                            icon: data.weather[0].icon,
                        },
                    })
                )
                .catch(({ response }) => {
                    console.log(response.data);
                    reject(response.data);
                });
        });
    }
}
