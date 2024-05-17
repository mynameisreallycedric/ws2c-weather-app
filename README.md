# Weather-App for ws2C Workshop ⛅️

## Brief
Für den Workshop ws2c habe ich mich mit TypeScript beschäftigt.
Nach dem Abschluss eines Online Lernkurses habe ich mich dann dazu entschieden folgendes Web Projekt umzusetzen um das gelernte anwenden zu können.

Mit dem WebApp kann eine Wettervorhersage über drei Tage für auswählbare Orte angezeigt werden.
Der Fokus lag dabei auf der Benützung einer öffentliche API und der typisierung mittels TypeScript.

![Demo](.doc/images/Demo.gif)

## Data Source
Als Datenquelle wurde die [Weather-Forecast API](https://open-meteo.com/en/docs) von Open-Meteo verwendet. Diese API kann ohne Bezahlung verwendet werden.

Mittels Parameter bei einem GET-Request können verschiedene Informationen zur Wetterlage über einen Ort, welcher mittels Koordinaten angegeben werden muss, abgefragt werden.

*Beispiel Request*


## Technologies used
Für die Umsetzung des FrontEnds wurden die folgenden Technologien verwendet:

- Vue.JS
- Nuxt
- TypeScript
- Vite

# Workshop - TypeScript Focus

## TypeScript used in Project
Die verwendeten Types sind in dem Ordner [types](/types) abgelegt.

Für die Darstellung der Wetter-Kacheln ist vor allem der "WeatherForecastByDay" Type wichtig. So konnten die aufbereiteten Daten der API mittels diesem Typ einfach im Komponenten [WeatherCard.vue](/components/WeatherCard.vue) dargestellt werden.

```typescript
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
```

### Course
Während der Lernphase des Workshops habe ich den folgenden Kurs durchgearbeitet
Dieser eignet sich sehr gut für den Einstieg in TypeScript und ist sogar Kostenlos verwendbar.

[Codecademy - TypeScript Kurs](https://www.codecademy.com/learn/learn-typescript)


# Run Project

## Setup

Installiere alle Dependencies mit folgendem Befehl:

```bash
# npm
npm install
```

## Development Server

Starte den lokalen Dev-Server, erreichbar unter folgender URL `http://localhost:3999`:

```bash
# npm
npm run dev
```

© Cédric Wagner 2024