import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherStackApiKey = 'b794ccb3a99b9176a23e310d80dad0f0';
  openWeatherApiKey = 'db09a8b59086ff8679e55b17cbb88d4b';

  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string) {
    return this.httpClient.get(
      `http://api.weatherstack.com/current?access_key=${this.weatherStackApiKey}&query=${city}`
    );
  }

  getForecastWeatherFromApi(lat: number, lon: number) {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.openWeatherApiKey}`
    );
  }

  getCurrentLocationInfo(){
    return this.httpClient.get(`https://ipinfo.io?token=4059f38bd20e75`);
  }
}
