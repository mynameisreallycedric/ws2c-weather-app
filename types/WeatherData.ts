import type {WeatherCurrentUnits} from "~/types/WeatherCurrentUnits";
import type {WeatherDataCurrent} from "~/types/WeatherDataCurrent";
import type {WeatherDataDailyUnits} from "~/types/WeatherDataDailyUnits";
import type {WeatherDataDaily} from "~/types/WeatherDataDaily";

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