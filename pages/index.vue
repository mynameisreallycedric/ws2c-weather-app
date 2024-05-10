<script setup lang="ts">
import type {WeatherData, WeatherDataDaily} from "~/types/WeatherData";
import type {WeatherForecastByDay} from "~/types/WeatherForecastByDay";
import type {ComputedRef} from "vue";
import locationCoordinates, {type LocationCoordinates} from "~/types/LocationCoordinates";
import WeatherCard from "~/components/WeatherCard.vue";

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
    current: 'weather_code,temperature_2m,relative_humidity_2m,is_day,rain,showers,snowfall',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,rain_sum,showers_sum',
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
            weather_code: daily.weather_code[i],
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
  <div class="section__weather-card">
    <div v-for="day in weatherForecastByDays">
      <WeatherCard :weatherForecast="day"></WeatherCard>
    </div>
  </div>
</div>
</template>

<style scoped>

.section__weather-card {
  width: 100%;
  display: flex;
  justify-content: center;
}


</style>