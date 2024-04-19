export interface WeatherDataCurrent {
    time: string,
    interval: number,
    temperature_2m: number,
    relative_humidity_2m: number,
    is_day: number,
    rain: number,
    showers: number,
    snowfall: number,
}