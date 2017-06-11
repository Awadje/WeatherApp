const API_KEY ='50ac305e6b4c6e015acd4e0a3e9f297e';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},nl`;
  return {
    type: FETCH_WEATHER
  };
}
