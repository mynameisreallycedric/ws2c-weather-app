<script setup lang="ts">
import type {WeatherForecastByDay} from "~/types/WeatherForecastByDay";

interface Props {
  weatherForecast: WeatherForecastByDay
}

defineProps<Props>();
</script>

<template>
  <div class="weather-card__container">
    <NuxtImg class="weather-card__image" src="sun.png"></NuxtImg>
    <div class="weather-card__top">
      <p>h</p>
    </div>
    <div class="weather-card__bottom">
      <p>{{ weatherForecast.temperature_2m_max }}</p>
      <p>{{ weatherForecast.temperature_2m_min }}</p>
    </div>
  </div>
</template>

<style scoped>
.weather-card__container {
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;;
  flex-direction: column;
  align-items: start;
  display: flex;
  position: relative;
  padding: 0;
  height: 650px;
  width: 430px;
  overflow: hidden;
}

.weather-card__bottom {
  margin-top: auto;
  z-index: 10;
  width: 100%;
  fill: rgba(255, 255, 255, 0.30);
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(7.5px);
  height: 50%;
}

.weather-card__top {
  content: "";
  background: linear-gradient(177deg, rgba(140, 237, 255, 0.30) 8.07%, rgba(255, 195, 78, 0.30) 59.35%);
  height: 50%;
  width: 100%;
  margin: 0;
}

.weather-card__image {
  margin: auto;
  z-index: 0;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}


</style>