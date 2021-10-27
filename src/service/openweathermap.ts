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

export default class OpenWatherMap {
    public static async GetCity(city: string) {
        const options = {
            params: {
                q: city,
            },
        };
        return await api_openWeatherMap.request(options).then(({ data }) => {
            const mapped = {
                city: data.name,
                country: data.sys.country,
                coord_lon: data.lon,
                coord_lat: data.lat,
                main: data.weather.main,
                description: data.weather.description,
                icon: data.weather.icon,
                temp: data.main.temp,
            };

            return mapped;
        });
    }
}
