// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the React-weather project. All rights reserved.          │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '~/hooks/store';
import OpenWeatherMap from '~/service/openweathermap';

export interface IWeatherData {
    dt: number;
    location: {
        id: number;
        name: string;
        country: string;
        coord_lon: number;
        coord_lat: number;
        timezone: number;
        temp: number;
    };
    astro: {
        sunrise: number;
        sunset: number;
    };
    element: {
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        wind_speed: number;
        wind_deg: number;
        clouds: number;
    };
    condition: {
        id: number;
        name: string;
        description: string;
        icon: string;
    };
}

export interface IWeatherStatus {
    cod: number;
    name: 'START' | 'LOADING' | 'IDLE' | 'FAILED';
    message: string;
}

export interface IWeatherState {
    data: IWeatherData;
    status: IWeatherStatus;
}

const initialState: IWeatherState = {
    data: {
        dt: 0,
        location: {
            id: 0,
            name: '',
            country: '',
            coord_lon: 0,
            coord_lat: 0,
            timezone: 0,
            temp: 0,
        },
        astro: {
            sunrise: 0,
            sunset: 0,
        },
        element: {
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            wind_speed: 0,
            wind_deg: 0,
            clouds: 0,
        },
        condition: {
            id: 0,
            name: '',
            description: '',
            icon: '',
        },
    },
    status: {
        cod: 0,
        name: 'START',
        message: '',
    },
} as IWeatherState;

export const setCityWeather = createAsyncThunk(
    'weather/setCityWeather',
    async (city: string, { rejectWithValue }) =>
        await OpenWeatherMap.GetCity(city).catch((error) => rejectWithValue(error))
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setCityWeather.pending, (state) => {
                state.status = { name: 'LOADING', cod: 200, message: '' } as IWeatherStatus;
            })
            .addCase(setCityWeather.fulfilled, (state, { payload }) => {
                state.status = { name: 'IDLE', cod: 200, message: '' } as IWeatherStatus;
                state.data = payload as IWeatherData;
            })
            .addCase(setCityWeather.rejected, (state, { payload }) => {
                state.status = {
                    ...(payload as IWeatherStatus),
                    name: 'FAILED',
                } as IWeatherStatus;
            });
    },
});

export const selectWeather = (state: RootState) => {
    return { ...state.weather.data, status: state.weather.status };
};

export default weatherSlice.reducer;
