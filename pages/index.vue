<script setup lang="ts">
import type {WeatherData} from "~/types/WeatherData";

const { data: WeatherData, pending, error } = useFetch(() => 'https://api.open-meteo.com/v1/forecast', {
  query: {
    latitude: 52.52,
    longitude: 13.41,
    current: 'is_day,rain',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,rain_sum'
  }
});

</script>

<template>
<div>
  {{ WeatherData }}
</div>
</template>

<style scoped>

</style>