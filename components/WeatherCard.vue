<script setup lang="ts">
import type {WeatherForecastByDay} from "~/types/WeatherForecastByDay";

interface Props {
  weatherForecast: WeatherForecastByDay
}

const props = defineProps<Props>();

const weatherCode = computed(() => ({
  sunny: ( props.weatherForecast.weather_code > 0 && props.weatherForecast.weather_code < 2 ),
  cloudy: ( props.weatherForecast.weather_code >= 2 && props.weatherForecast.weather_code <= 67 ),
  rainy: ( props.weatherForecast.weather_code > 67 && props.weatherForecast.weather_code <= 82 ),
  snowy: ( props.weatherForecast.weather_code > 82)
}))

console.log("weathercode" + weatherCode)

</script>

<template>
    <div class="weather-card__container">
      <div>
        <NuxtImg v-if="weatherCode.sunny" class="weather-card__image" src="images/sun.png"></NuxtImg>
        <NuxtImg v-if="weatherCode.cloudy" class="weather-card__image" src="images/sunwithclouds.png"></NuxtImg>
      </div>
      <div class="weather-card__top" :class="weatherCode">
      </div>
      <div class="weather-card__bottom">
        <div class="weather-card__temp">
          <p style="font-size: 30px"><span class="weather-card__maxTemp">{{ weatherForecast.temperature_2m_max.toFixed(0) }}</span> °C</p>
          <div class="weather-card__temp-right">
            <div class="weather-card__icon-container">
              <NuxtImg width="16" height="16" src="icons/arrow_down.svg"></NuxtImg><p>{{ weatherForecast.temperature_2m_min.toFixed(0) }} °C</p>
            </div>
            <div style="margin-top: auto" class="weather-card__icon-container">
              <NuxtImg width="16" height="16" src="icons/rain.svg"></NuxtImg><p style="margin-top: auto">{{ weatherForecast.rain_sum }} mm</p>
            </div>
          </div>
        </div>
        <div class="weather-card_sun">
          <div class="weather-card__icon-container">
            <NuxtImg width="16" height="16" src="icons/sunrise.svg"></NuxtImg><p>{{ weatherForecast.sunrise }}</p>
          </div>
          <div class="weather-card__icon-container">
            <NuxtImg width="16" height="16" src="icons/sundown.svg"></NuxtImg><p>{{ weatherForecast.sunset }}</p>
          </div>
          <div class="weather-card__icon-container">
            <NuxtImg width="16" height="16" src="icons/sun.svg"></NuxtImg><p>{{ weatherForecast.daylight_duration }}</p>
          </div>
        </div>
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

.weather-card__maxTemp {
  font-size: 180px;
  font-family: 'Inter Bold';
}

.weather-card_sun {
  display: flex;
  flex-direction: row;
}

.weather-card__temp {
  display: flex;
  flex-direction: row;
}

.weather-card__temp-right {
  display: flex;
  flex-direction: column;
  padding: 2rem 0 2rem 3rem;
}

.weather-card__icon-container {
  display: inline-flex;
  gap: 5px;
}

.weather-card__bottom {
  display: flex;
  flex-direction: column;

  margin-top: auto;
  z-index: 10;
  width: 100%;
  fill: rgba(255, 255, 255, 0.30);
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(7.5px);
  height: 50%;
}

.weather-card__top {
  content: " ";
  height: 50%;
  width: 100%;
  margin: 0;
}

.weather-card__top.sunny {
  background: linear-gradient(177deg, rgba(140, 237, 255, 0.30) 8.07%, rgba(255, 195, 78, 0.30) 59.35%);
}

.weather-card__top.cloudy {
  background: linear-gradient(177deg, rgba(140, 237, 255, 0.30) 8.07%, rgba(255, 195, 78, 0.30) 59.35%);
}

.weather-card__top.rainy {
  background: linear-gradient(177deg, rgba(0, 33, 117, 0.30) 8.07%, rgba(103, 137, 201, 0.30) 58.24%);
}

.weather-card__top.snowy {
  background: linear-gradient(177deg, rgba(198, 214, 255, 0.30) 8.07%, rgba(236, 243, 255, 0.30) 58.24%);
}

.weather-card__image {
  margin: auto;
  z-index: 0;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}


</style>