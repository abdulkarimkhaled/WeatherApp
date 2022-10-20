// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ApiConstants from './index'
import { weatherAppIDKey } from '../config/appKeys'

// Define a service using a base URL and expected endpoints

export const WeatherApi = createApi({
    //defince which reducer to use
    reducerPath: 'weatherAPI',
    //defince base url of your server
    baseQuery: fetchBaseQuery({ baseUrl: ApiConstants.BASE_URL }),
    //defince add params and data to your server call
    endpoints: (builder) => ({
        getWeatherCity: builder.mutation({
            query: data => ({
                url:
                    ApiConstants.WEATHER +
                    `?q=${data.city}` +
                    `&appid=${weatherAppIDKey}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },
            }),
        }),

        getWeatherHistorical: builder.query({
            query: data => ({
                url:
                    ApiConstants.HISTORY +
                    `?q=${data.city}` +
                    `&type=${data.type}` +
                    `&appid=${weatherAppIDKey}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },
            }),
        }),
    }),
})


export const {
    useGetWeatherCityMutation,
    useGetWeatherHistoricalQuery
} = WeatherApi

