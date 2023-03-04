import { Component } from '@angular/core';
import {WeatherService} from "../services/weather.service";
import * as moment from "moment";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public weather: any;
  public forecastWeather: any;
  public lat: any;
  public lng: any;
  public locationInfo : any;
  public currentDate = '';
  public weatherIcon = '/assets/images/cloudy.png';
  constructor(private service:WeatherService) {}
  async ngOnInit() {

    await this.service.getCurrentLocationInfo().subscribe((info) => {
      this.locationInfo = info;
      console.log(info);
      console.log(this.locationInfo.city);
      if (this.locationInfo != undefined) {
        this.locationInfo.city = this.locationInfo.city.replace(/ñ/g, "n");

        this.service.getWeatherFromApi(this.locationInfo.city).subscribe((weather) => {
          this.weather = weather;
          this.setCurrentDate(this.weather.location.localtime);
          this.weatherIcon = this.getIcon(this.weather.current.weather_descriptions[0]);
          console.log(weather);
        });

        const splitCoordinate = this.locationInfo.loc.split(',');
        this.lat = splitCoordinate[0];
        this.lng = splitCoordinate[1];

        this.service.getForecastWeatherFromApi(this.lat, this.lng).subscribe((forecastWeather) => {
          this.forecastWeather = forecastWeather;

          console.log(this.forecastWeather);
        });
      }
    });

  }
  setCurrentDate(localtime: string) {
    const date = moment(localtime);
    this.currentDate = date.format(`dddd, D MMMM`);
  }

  getIcon(description: string){
    switch (description){
    case "Partly cloudy":
      return '/assets/images/cloudy.png'
    default:
      return '/assets/images/cloudy.png'
    }
  }
}
