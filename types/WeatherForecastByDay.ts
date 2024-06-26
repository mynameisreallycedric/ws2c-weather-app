export interface WeatherForecastByDay {
    time: Date,
    weather_code: number,
    temperature_2m_max: number,
    temperature_2m_min: number,
    sunrise: string,
    sunset: string,
    daylight_duration: number,
    rain_sum: number,
    showers_sum: number
}