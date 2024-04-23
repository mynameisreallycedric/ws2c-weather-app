<script setup lang="ts">
import type {WeatherData, WeatherDataDaily} from "~/types/WeatherData";
import type {WeatherForecastByDay} from "~/types/WeatherForecastByDay";
import type {ComputedRef} from "vue";
import locationCoordinates, {type LocationCoordinates} from "~/types/LocationCoordinates";

const selectedLocation = ref<LocationCoordinates>();

const latitude: ComputedRef<number | undefined> = computed(() => {
  return selectedLocation.value?.coordinates.latitude;
})

const longitude: ComputedRef<number | undefined> = computed(() => {
  return selectedLocation.value?.coordinates.longitude;
})

const { data: weatherData, pending, error } = useFetch<WeatherData>(() => 'https://api.open-meteo.com/v1/forecast', {
  query: {
    latitude: latitude,
    longitude: longitude,
    current: 'temperature_2m,relative_humidity_2m,is_day,rain,showers,snowfall',
    daily: 'temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,rain_sum,showers_sum',
    timezone: 'Europe/Berlin',
    forecast_days: 3,
  }
});

const weatherForecastByDays: ComputedRef<WeatherForecastByDay[]> = computed<WeatherForecastByDay[]>(() => {
    let dailyForecast: WeatherForecastByDay[] = [];
    if (weatherData.value?.daily) {
       for (let i = 0; i < weatherData.value?.daily.time.length; i++) {
          let daily: WeatherDataDaily = weatherData.value.daily;
          console.log(daily)
          dailyForecast.push({
            time: daily.time[i],
            temperature_2m_max: daily.temperature_2m_max[i],
            temperature_2m_min: daily.temperature_2m_min[i],
            sunrise: daily.sunrise[i],
            sunset: daily.sunset[i],
            daylight_duration: daily.daylight_duration[i],
            rain_sum: daily.rain_sum[i],
            showers_sum: daily.showers_sum[i],
          });
        }
    }
    return dailyForecast;
})

</script>

<template>
<div>
  <h1>Weather Data</h1>
  {{ weatherData }}
  {{ error }}

  <select v-model="selectedLocation">
    <option v-for="location in locationCoordinates" :value="location">{{ location.name }}</option>
  </select>



  <p>Weather by Days</p>
  <div v-for="day in weatherForecastByDays">
    <p>{{ day.time }}</p>
    <p>{{ day.temperature_2m_max }}</p>
    <p>{{ day.temperature_2m_min }}</p>
    <p>{{ day.sunrise }}</p>
    <p>{{ day.sunset }}</p>
    <p>{{ day.daylight_duration }}</p>
    <p>{{ day.rain_sum }}</p>
    <p>{{ day.showers_sum }}</p>
  </div>
</div>
</template>

<style scoped>

</style>