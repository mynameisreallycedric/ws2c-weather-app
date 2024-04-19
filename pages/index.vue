<script setup lang="ts">
import type {WeatherData} from "~/types/WeatherData";
import type {WeatherDataDaily} from "~/types/WeatherDataDaily";

const { data: WeatherData, pending, error } = useFetch(() => 'https://api.open-meteo.com/v1/forecast', {
  query: {
    latitude: 52.52,
    longitude: 13.41,
    current: 'temperature_2m,relative_humidity_2m,is_day,rain,showers,snowfall',
    daily: 'temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,rain_sum,showers_sum',
    timezone: 'Europe/Berlin',
    forecast_days: 3,
  }
});

function getForecastByDay(day: number): WeatherDataDaily {
  let dailyForecast: WeatherDataDaily;

}

</script>

<template>
<div>
  <h1>Weather Data</h1>
  {{ WeatherData }}
  {{ error }}

  <div v-for="(day, key) in WeatherData['daily'] as WeatherDataDaily">
    {{ key }}
    <div v-for="value in day" >
      {{ value }}
    </div>
  </div>
</div>
</template>

<style scoped>

</style>