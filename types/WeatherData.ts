export interface WeatherData {
    latitude: number,
    longitude: number,
    generationtime_ms: number,
    utc_offset_seconds: number,
    timezone: string,
    timezone_abbreviation: string,
    elevation: number,
    current_units: WeatherCurrentUnits,
    current: WeatherDataCurrent,
    daily_units: WeatherDataDailyUnits,
    daily: WeatherDataDaily
}

export interface WeatherCurrentUnits {
    time: number,
    interval: string,
    temperature_2m: string,
    relative_humidity_2m: string,
    is_day: string,
    rain: string,
    showers: string,
    snowfall: string
}

export interface WeatherDataCurrent {
    time: number,
    interval: number,
    temperature_2m: number,
    relative_humidity_2m: number,
    is_day: number,
    rain: number,
    showers: number,
    snowfall: number,
}

export interface WeatherDataDaily {
    time: Date[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    sunrise: string[],
    sunset: string[],
    daylight_duration: number[],
    rain_sum: number[],
    showers_sum: number[]
}

export interface WeatherDataDailyUnits {
    time: number,
    temperature_2m_max: string,
    temperature_2m_min: string,
    sunrise: string,
    sunset: string,
    daylight_duration: string,
    rain_sum: string,
    showers_sum: string
}